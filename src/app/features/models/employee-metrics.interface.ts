export interface EmployeeMetrics {
  totalEmployees: number;
  activeNow: number;
  averageHoursWeek: number;
  productivityScore: number;
  onLeave: number;
  remote: number;
  newHires: number;
  growthRate: number;
}

export type TimePeriod = 'last7days' | 'lastMonth' | 'last3Months' | 'last6Months' | 'last12Months';