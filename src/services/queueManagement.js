import { collection, query, where, getDocs, addDoc, updateDoc, doc, orderBy, serverTimestamp, increment } from 'firebase/firestore';
import { db } from '../Database/firebase';

export const queueManagement = {
  // Generate a new queue number
  generateQueueNumber: async (departmentId) => {
    try {
      // Get today's date at midnight
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // Get the current queue count for today
      const q = query(
        collection(db, 'queueNumbers'),
        where('departmentId', '==', departmentId),
        where('date', '>=', today)
      );
      const queueSnapshot = await getDocs(q);
      const currentNumber = queueSnapshot.size + 1;

      // Create the queue number with  DEPT-YYYYMMDD-XXX
      const dateStr = today.toISOString().slice(0, 10).replace(/-/g, '');
      const queueNumber = `${departmentId}-${dateStr}-${String(currentNumber).padStart(3, '0')}`;

      // Save in  queue number
      await addDoc(collection(db, 'queueNumbers'), {
        number: queueNumber,
        departmentId,
        date: today,
        timestamp: serverTimestamp(),
        status: 'waiting',
        position: currentNumber
      });

      return {
        queueNumber,
        position: currentNumber
      };
    } catch (error) {
      console.error('Error generating queue number:', error);
      throw error;
    }
  },

  
  getDepartmentQueueStatus: async (departmentId) => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const q = query(
        collection(db, 'queueNumbers'),
        where('departmentId', '==', departmentId),
        where('date', '>=', today),
        orderBy('date'),
        orderBy('position')
      );

      const queueSnapshot = await getDocs(q);
      const numbers = queueSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      return {
        totalInQueue: numbers.length,
        currentlyServing: numbers.find(n => n.status === 'serving')?.number || null,
        waitingNumbers: numbers.filter(n => n.status === 'waiting').map(n => n.number),
        completedNumbers: numbers.filter(n => n.status === 'completed').length,
        estimatedWaitTime: calculateEstimatedWaitTime(numbers)
      };
    } catch (error) {
      console.error('Error getting queue status:', error);
      throw error;
    }
  },


  updateQueueStatus: async (queueNumber, status) => {
    try {
      const q = query(
        collection(db, 'queueNumbers'),
        where('number', '==', queueNumber)
      );
      const snapshot = await getDocs(q);
      
      if (!snapshot.empty) {
        const queueDoc = snapshot.docs[0];
        await updateDoc(doc(db, 'queueNumbers', queueDoc.id), {
          status,
          lastUpdated: serverTimestamp()
        });


        if (status === 'completed') {
          const deptRef = doc(db, 'departments', queueDoc.data().departmentId);
          await updateDoc(deptRef, {
            completedToday: increment(1),
            lastCompletedAt: serverTimestamp()
          });
        }
      }
    } catch (error) {
      console.error('Error updating queue status:', error);
      throw error;
    }
  },


  getQueueInfo: async (queueNumber) => {
    try {
      const q = query(
        collection(db, 'queueNumbers'),
        where('number', '==', queueNumber)
      );
      const snapshot = await getDocs(q);
      
      if (!snapshot.empty) {
        const queueData = snapshot.docs[0].data();
        const departmentId = queueData.departmentId;
        

        const deptQ = query(
          collection(db, 'queueNumbers'),
          where('departmentId', '==', departmentId),
          where('date', '==', queueData.date),
          where('position', '<=', queueData.position),
          where('status', '==', 'waiting')
        );
        
        const deptSnapshot = await getDocs(deptQ);
        const position = deptSnapshot.size;
        
        return {
          position,
          estimatedWaitTime: position * 5, 
          status: queueData.status
        };
      }
      
      throw new Error('Queue number not found');
    } catch (error) {
      console.error('Error getting queue info:', error);
      throw error;
    }
  }
};

// Helper function to calculate estimated wait time
const calculateEstimatedWaitTime = (numbers) => {
  const completedNumbers = numbers.filter(n => n.status === 'completed');
  if (completedNumbers.length < 2) return 5;

 
  const times = completedNumbers.map(n => n.lastUpdated.toDate());
  let totalDiff = 0;
  for (let i = 1; i < times.length; i++) {
    totalDiff += times[i] - times[i-1];
  }
  
  const averageTimePerPerson = totalDiff / (times.length - 1) / 60000;
  return Math.max(Math.round(averageTimePerPerson), 1); 
}; 