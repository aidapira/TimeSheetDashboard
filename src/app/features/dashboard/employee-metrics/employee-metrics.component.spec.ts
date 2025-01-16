import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMetricsComponent } from './employee-metrics.component';

describe('EmployeeMetricsComponent', () => {
  let component: EmployeeMetricsComponent;
  let fixture: ComponentFixture<EmployeeMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeMetricsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
