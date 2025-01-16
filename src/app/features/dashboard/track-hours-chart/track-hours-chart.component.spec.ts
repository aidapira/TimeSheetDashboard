import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackHoursChartComponent } from './track-hours-chart.component';

describe('TrackHoursChartComponent', () => {
  let component: TrackHoursChartComponent;
  let fixture: ComponentFixture<TrackHoursChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackHoursChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackHoursChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
