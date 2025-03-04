import { db } from '../Database/firebase';
import { collection, doc, setDoc, updateDoc, getDoc, getDocs, query, where, serverTimestamp } from 'firebase/firestore';

class AdminDepartmentService {
  constructor() {
    this.departmentsRef = collection(db, 'departments');
    this.managersRef = collection(db, 'departmentManagers');
    this.servicesRef = collection(db, 'services');
  }

  createDepartment = async (departmentData) => {
    try {
      const { name, description, maxCapacity, prefix } = departmentData;
      
      const deptRef = doc(this.departmentsRef);
      await setDoc(deptRef, {
        name,
        description,
        maxCapacity,
        prefix: prefix || name.substring(0, 2).toUpperCase(),
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        activeCounters: 0,
        warningThreshold: 0.8 
      });

      return {
        id: deptRef.id,
        name,
        description,
        maxCapacity
      };
    } catch (error) {
      console.error('Failed to create department:', error);
      throw error;
    }
  };

  updateDepartment = async (departmentId, updateData) => {
    try {
      const deptRef = doc(this.departmentsRef, departmentId);
      await updateDoc(deptRef, {
        ...updateData,
        updatedAt: serverTimestamp()
      });

      return true;
    } catch (error) {
      console.error('Failed to update department:', error);
      throw error;
    }
  };

  getPendingManagerVerifications = async () => {
    try {
      const q = query(this.managersRef, where('isVerified', '==', false));
      const managers = await getDocs(q);

      return managers.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Failed to get pending verifications:', error);
      throw error;
    }
  };

  verifyManager = async (managerId) => {
    try {
      const managerRef = doc(this.managersRef, managerId);
      await updateDoc(managerRef, {
        isVerified: true,
        verifiedAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      return true;
    } catch (error) {
      console.error('Failed to verify manager:', error);
      throw error;
    }
  };

  getDepartmentServices = async (departmentId) => {
    try {
      const q = query(this.servicesRef, where('departmentId', '==', departmentId));
      const services = await getDocs(q);

      return services.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Failed to get department services:', error);
      throw error;
    }
  };

  assignServiceToDepartment = async (serviceId, departmentId) => {
    try {
      const serviceRef = doc(this.servicesRef, serviceId);
      await updateDoc(serviceRef, {
        departmentId,
        updatedAt: serverTimestamp()
      });

      return true;
    } catch (error) {
      console.error('Failed to assign service:', error);
      throw error;
    }
  };

  getDepartmentManagers = async (departmentId) => {
    try {
      const q = query(
        this.managersRef, 
        where('departmentId', '==', departmentId),
        where('isVerified', '==', true)
      );
      const managers = await getDocs(q);

      return managers.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Failed to get department managers:', error);
      throw error;
    }
  };
}

export const adminDepartmentService = new AdminDepartmentService(); 