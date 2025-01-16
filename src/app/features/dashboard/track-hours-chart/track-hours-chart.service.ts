import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TrackedHoursData, TimePeriod } from '../../models/track-hours.interface';

@Injectable({
  providedIn: 'root'
})
export class TrackedHoursService {
  constructor(private http: HttpClient) {}

  getTrackedHours(period: TimePeriod): Observable<TrackedHoursData[]> {
    // Mock data - replace with actual API call
    const mockData: { [key in TimePeriod]: TrackedHoursData[] } = {
      week: this.generateWeekData(),
      month: this.generateMonthData(),
      year: this.generateYearData()
    };

    return of(mockData[period]);
  }

  private generateWeekData(): TrackedHoursData[] {
    const days = 7;
    const data: TrackedHoursData[] = [];
    const baseDate = new Date();

    for (let i = 0; i < days; i++) {
      const date = new Date(baseDate);
      date.setDate(date.getDate() - (days - i));
      data.push({
        date: date.toISOString().split('T')[0],
        employeeHours: 40 + Math.random() * 20,
        clientHours: 35 + Math.random() * 25
      });
    }

    return data;
  }

  private generateMonthData(): TrackedHoursData[] {
    const days = 30;
    const data: TrackedHoursData[] = [];
    const baseDate = new Date();

    for (let i = 0; i < days; i++) {
      const date = new Date(baseDate);
      date.setDate(date.getDate() - (days - i));
      data.push({
        date: date.toISOString().split('T')[0],
        employeeHours: 150 + Math.random() * 50,
        clientHours: 140 + Math.random() * 60
      });
    }

    return data;
  }

  private generateYearData(): TrackedHoursData[] {
    const months = 12;
    const data: TrackedHoursData[] = [];
    const baseDate = new Date();

    for (let i = 0; i < months; i++) {
      const date = new Date(baseDate);
      date.setMonth(date.getMonth() - (months - i));
      data.push({
        date: date.toISOString().split('T')[0],
        employeeHours: 600 + Math.random() * 200,
        clientHours: 550 + Math.random() * 250
      });
    }

    return data;
  }
}