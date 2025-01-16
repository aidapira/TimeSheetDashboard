import { TestBed } from '@angular/core/testing';

import { SrEdService } from './sr-ed.service';

describe('SrEdService', () => {
  let service: SrEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
