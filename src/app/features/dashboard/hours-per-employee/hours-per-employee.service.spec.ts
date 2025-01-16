import { TestBed } from '@angular/core/testing';

import { HoursPerEmployeeService } from './hours-per-employee.service';

describe('HoursPerEmployeeService', () => {
  let service: HoursPerEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoursPerEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
