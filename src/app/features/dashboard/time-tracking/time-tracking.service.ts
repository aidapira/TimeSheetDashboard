import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { 
  EmployeeTimeTracking, 
  ClientTimeTracking,
  Period 
} from '../../models/time-tracking.interface';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackingService {
  constructor(private http: HttpClient) {}

  getEmployeeData(period: Period): Observable<EmployeeTimeTracking[]> {
    // Mock data - replace with actual API call
    const mockData: EmployeeTimeTracking[] = Array(12).fill(null).map((_, index) => ({
      id: `emp-${index}`,
      name: 'Darkwah Manasseh',
      trackedHours: 2400,
      expectedHours: 2400,
      trackedTimesheet: 240,
      expectedTimesheet: 240,
      hoursPerProject: 240,
      performance: 98,
      status: 'Approved'
    }));

    // Simulate network delay
    return of(mockData).pipe(delay(500));
  }

  getClientData(period: Period): Observable<ClientTimeTracking[]> {
    // Mock data - replace with actual API call
    const mockData: ClientTimeTracking[] = Array(12).fill(null).map((_, index) => ({
      id: `client-${index}`,
      name: 'Client ' + (index + 1),
      timesheet: 240,
      expectedTime: 2400,
      trackedTime: 2350,
      missedTime: 50,
      hoursPerProject: 240,
      performance: 98
    }));

    // Simulate network delay
    return of(mockData).pipe(delay(500));
  }
}