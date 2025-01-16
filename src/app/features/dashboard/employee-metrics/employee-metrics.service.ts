import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeMetrics, TimePeriod } from '../../models/employee-metrics.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeMetricsService {
  constructor(private http: HttpClient) {}

  getMetrics(period: TimePeriod): Observable<EmployeeMetrics> {
    // Mock data - replace with actual API call
    return of({
      totalEmployees: 5669,
      activeNow: 5669,
      averageHoursWeek: 5669,
      productivityScore: 5669,
      onLeave: 30,
      remote: 30,
      newHires: 30,
      growthRate: 15.80
    });
  }
}