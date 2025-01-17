// time-tracking.interface.ts
export type ViewMode = 'employee' | 'client';
export type Period = string; // e.g., '1998', '1999', etc.

export interface BaseTimeTracking {
  id: string;
  name: string;
  hoursPerProject: number;
  performance: number;
}

export interface EmployeeTimeTracking extends BaseTimeTracking {
  trackedHours: number;
  expectedHours: number;
  trackedTimesheet: number;
  expectedTimesheet: number;
  status: 'Approved' | 'Pending' | 'Rejected';
}

export interface ClientTimeTracking extends BaseTimeTracking {
  timesheet: number;
  expectedTime: number;
  trackedTime: number;
  missedTime: number;
}

export interface TimeTrackingState {
  viewMode: ViewMode;
  selectedPeriod: Period;
  rowData: (EmployeeTimeTracking | ClientTimeTracking)[];
}