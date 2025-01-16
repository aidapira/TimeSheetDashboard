// models/timesheet.models.ts
export interface EmployeeTimesheet {
  name: string;
  hoursTracked: string;
  expectedHoursTracked: string;
  hoursProject: string;
  status: string;
}

export interface ClientTimesheet {
  name: string;
  timesheet: string;
  expectedTime: string;
  trackedTime: string;
  missedTime: string;
  hoursProject: string;
  performance: string;
}

export type ViewType = 'employee' | 'client';