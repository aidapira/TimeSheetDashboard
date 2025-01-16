import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface HoursData {
  type: string;
  hours: number;
}

@Injectable({
  providedIn: 'root'
})
export class HoursPerEmployeeService {
  getHoursData(period: string): Observable<HoursData[]> {
    // Mock data based on period
    const data: { [key: string]: HoursData[] } = {
      'Monthly': [
        { type: 'Tracked', hours: 450 },
        { type: 'Expected hours to work', hours: 50 }
      ],
      'Weekly': [
        { type: 'Tracked', hours: 40 },
        { type: 'Expected hours to work', hours: 5 }
      ],
      'Daily': [
        { type: 'Tracked', hours: 8 },
        { type: 'Expected hours to work', hours: 1 }
      ]
    };

    return of(data[period] || data['Monthly']);
  }
}