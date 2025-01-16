// features/sr-ed/sr-ed.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface SrEdData {
  name: string;
  hoursTracked: number;
  expectedHoursTracked: number;
  totalSrEdHours: number;
  srEdPercentage: number;
}

@Injectable({
  providedIn: 'root'  // This ensures the service is provided at the root level
})
export class SrEdService {
  private apiUrl = 'http://localhost:4200/'; // Your API endpoint

  constructor(private http: HttpClient) {}

  getSrEdData(year: number): Observable<SrEdData[]> {
    // For development/testing, you can use mock data
    const mockData: SrEdData[] = [
      {
        name: 'Darkwah Manasseh',
        hoursTracked: 2400,
        expectedHoursTracked: 5600,
        totalSrEdHours: 240,
        srEdPercentage: 40
      },
      {
        name: 'Darkwah Manasseh',
        hoursTracked: 2400,
        expectedHoursTracked: 5600,
        totalSrEdHours: 240,
        srEdPercentage: 40
      },
      {
        name: 'Darkwah Manasseh',
        hoursTracked: 2400,
        expectedHoursTracked: 5600,
        totalSrEdHours: 240,
        srEdPercentage: 40
      },
      {
        name: 'Darkwah Manasseh',
        hoursTracked: 2400,
        expectedHoursTracked: 5600,
        totalSrEdHours: 240,
        srEdPercentage: 40
      },
      {
        name: 'Darkwah Manasseh',
        hoursTracked: 2400,
        expectedHoursTracked: 5600,
        totalSrEdHours: 240,
        srEdPercentage: 40
      },
      {
        name: 'Darkwah Manasseh',
        hoursTracked: 2400,
        expectedHoursTracked: 5600,
        totalSrEdHours: 240,
        srEdPercentage: 40
      },
      {
        name: 'Darkwah Manasseh',
        hoursTracked: 2400,
        expectedHoursTracked: 5600,
        totalSrEdHours: 240,
        srEdPercentage: 40
      },
      {
        name: 'Darkwah Manasseh',
        hoursTracked: 2400,
        expectedHoursTracked: 5600,
        totalSrEdHours: 240,
        srEdPercentage: 40
      }
    ];

    // During development, return mock data
    return of(mockData).pipe(delay(300));

    // When ready for production, uncomment this:
    // return this.http.get<any[]>(`${this.apiUrl}?year=${year}`);
  }
}