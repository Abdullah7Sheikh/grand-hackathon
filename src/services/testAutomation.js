import { queueManagement } from './queueManagement';
import { notificationService } from './notificationService';
import { analyticsService } from './analyticsService';

export const testAutomation = async () => {
  try {
    // Test Queue Management
    const serviceId = 'test-service';
    const departmentId = 'test-dept';
    const userId = 'test-user';
    
    
    const queueNumber = await queueManagement.generateQueueNumber(serviceId, departmentId);
    console.log('Queue Number:', queueNumber);
    

    const priorityScore = await queueManagement.calculatePriorityScore(userId, serviceId);
    console.log('Priority Score:', priorityScore);
    

    const waitTime = await queueManagement.estimateWaitTime(departmentId, 1);
    console.log('Estimated Wait Time:', waitTime);
    
    
    const capacity = await queueManagement.monitorDepartmentCapacity(departmentId);
    console.log('Department Capacity:', capacity);
    
    
    const ticketId = 'test-ticket';
    await notificationService.sendQueueUpdate(ticketId, 1, waitTime);
    await notificationService.sendApproachingTurnReminder(ticketId);
    
   
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);
    const endDate = new Date();
    
    const metrics = await analyticsService.getDepartmentMetrics(departmentId, startDate, endDate);
    console.log('Department Metrics:', metrics);
    
    const utilization = await analyticsService.getServiceUtilization(serviceId);
    console.log('Service Utilization:', utilization);
    
    const patterns = await analyticsService.getUserVisitPatterns(userId);
    console.log('User Patterns:', patterns);
    
    return true;
  } catch (error) {
    console.error('Automation Test Failed:', error);
    return false;
  }
}; 