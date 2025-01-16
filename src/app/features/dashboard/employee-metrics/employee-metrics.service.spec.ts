import { TestBed } from '@angular/core/testing';

import { EmployeeMetricsService } from './employee-metrics.service';

describe('EmployeeMetricsService', () => {
  let service: EmployeeMetricsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeMetricsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
