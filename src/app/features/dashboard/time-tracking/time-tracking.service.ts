// services/timesheet.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeTimesheet, ClientTimesheet } from '../../models/time-tracking.interface';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {
  // constructor(private http: HttpClient) {}
  timesheet = inject(HttpClient);
  
  getEmployeeTimesheets(period: string): Observable<EmployeeTimesheet[]> {
    // Mock data - replace with actual API call
    return of([
      {
        name: 'Darkwali Manasein',
        hoursTracked: '24:00hours',
        expectedHoursTracked: '24:00hours',
        hoursProject: '24:00hours',
        status: 'Approved'
      },
      {
        name: 'Darkwali Manasein',
        hoursTracked: '24:00hours',
        expectedHoursTracked: '24:00hours',
        hoursProject: '24:00hours',
        status: 'Approved'
      },
      {
        name: 'Darkwali Manasein',
        hoursTracked: '24:00hours',
        expectedHoursTracked: '24:00hours',
        hoursProject: '24:00hours',
        status: 'Approved'
      },
      {
        name: 'Darkwali Manasein',
        hoursTracked: '24:00hours',
        expectedHoursTracked: '24:00hours',
        hoursProject: '24:00hours',
        status: 'Approved'
      },
      {
        name: 'Darkwali Manasein',
        hoursTracked: '24:00hours',
        expectedHoursTracked: '24:00hours',
        hoursProject: '24:00hours',
        status: 'Approved'
      },
      {
        name: 'Darkwali Manasein',
        hoursTracked: '24:00hours',
        expectedHoursTracked: '24:00hours',
        hoursProject: '24:00hours',
        status: 'Approved'
      },
      {
        name: 'Darkwali Manasein',
        hoursTracked: '24:00hours',
        expectedHoursTracked: '24:00hours',
        hoursProject: '24:00hours',
        status: 'Approved'
      },
      {
        name: 'Darkwali Manasein',
        hoursTracked: '24:00hours',
        expectedHoursTracked: '24:00hours',
        hoursProject: '24:00hours',
        status: 'Approved'
      },
      {
        name: 'Darkwali Manasein',
        hoursTracked: '24:00hours',
        expectedHoursTracked: '24:00hours',
        hoursProject: '24:00hours',
        status: 'Approved'
      },
      // Add more mock data...
    ]);
  }

  getClientTimesheets(period: string): Observable<ClientTimesheet[]> {
    // Mock data - replace with actual API call
    return of([
      {
        name: 'Darkwali Manasein',
        timesheet: '24:00hours',
        expectedTime: '24:00hours',
        trackedTime: '22:00hours',
        missedTime: '2:00hours',
        hoursProject: '24:00hours',
        performance: '92%'
      },
      {
        name: 'Darkwali Manasein',
        timesheet: '24:00hours',
        expectedTime: '24:00hours',
        trackedTime: '22:00hours',
        missedTime: '2:00hours',
        hoursProject: '24:00hours',
        performance: '92%'
      },
      {
        name: 'Darkwali Manasein',
        timesheet: '24:00hours',
        expectedTime: '24:00hours',
        trackedTime: '22:00hours',
        missedTime: '2:00hours',
        hoursProject: '24:00hours',
        performance: '92%'
      },
      {
        name: 'Darkwali Manasein',
        timesheet: '24:00hours',
        expectedTime: '24:00hours',
        trackedTime: '22:00hours',
        missedTime: '2:00hours',
        hoursProject: '24:00hours',
        performance: '92%'
      },
      {
        name: 'Darkwali Manasein',
        timesheet: '24:00hours',
        expectedTime: '24:00hours',
        trackedTime: '22:00hours',
        missedTime: '2:00hours',
        hoursProject: '24:00hours',
        performance: '92%'
      },
      {
        name: 'Darkwali Manasein',
        timesheet: '24:00hours',
        expectedTime: '24:00hours',
        trackedTime: '22:00hours',
        missedTime: '2:00hours',
        hoursProject: '24:00hours',
        performance: '92%'
      },
      // Add more mock data...
    ]);
  }
}