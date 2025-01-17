import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeMetrics, TimePeriod } from '../../models/employee-metrics.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeMetricsService {
  private mockData: Record<TimePeriod, EmployeeMetrics> = {
    'last7days': {
      totalEmployees: 95,
      activeNow: 82,
      averageHoursWeek: 38,
      productivityScore: 85,
      onLeave: 5,
      remote: 30,
      newHires: 8,
      growthRate: 15.8
    },
    'lastMonth': {
      totalEmployees: 88,
      activeNow: 75,
      averageHoursWeek: 35,
      productivityScore: 82,
      onLeave: 8,
      remote: 25,
      newHires: 5,
      growthRate: -2.5
    },
    'last3Months': {
      totalEmployees: 105,
      activeNow: 92,
      averageHoursWeek: 42,
      productivityScore: 88,
      onLeave: 3,
      remote: 35,
      newHires: 12,
      growthRate: 22.4
    },
    'last6Months': {
      totalEmployees: 78,
      activeNow: 65,
      averageHoursWeek: 36,
      productivityScore: 79,
      onLeave: 6,
      remote: 20,
      newHires: 3,
      growthRate: -8.3
    },
    'last12Months': {
      totalEmployees: 120,
      activeNow: 108,
      averageHoursWeek: 40,
      productivityScore: 90,
      onLeave: 4,
      remote: 45,
      newHires: 15,
      growthRate: 28.6
    }
  };

  constructor(private http: HttpClient) {}

  getMetrics(period: TimePeriod): Observable<EmployeeMetrics> {
    // Return the corresponding mock data for the selected period
    return of(this.mockData[period]);
  }
}