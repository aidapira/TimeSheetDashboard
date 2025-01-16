export interface TrackedHoursData {
    date: string;
    employeeHours: number;
    clientHours: number;
  }
  
  export type TimePeriod = 'week' | 'month' | 'year';