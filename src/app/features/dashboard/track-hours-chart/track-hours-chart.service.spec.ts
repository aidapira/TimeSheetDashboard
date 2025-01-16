import { TestBed } from '@angular/core/testing';

import { TrackHoursChartService } from './track-hours-chart.service';

describe('TrackHoursChartService', () => {
  let service: TrackHoursChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackHoursChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
