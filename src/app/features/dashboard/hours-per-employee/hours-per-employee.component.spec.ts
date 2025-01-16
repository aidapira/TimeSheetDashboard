import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursPerEmployeeComponent } from './hours-per-employee.component';

describe('HoursPerEmployeeComponent', () => {
  let component: HoursPerEmployeeComponent;
  let fixture: ComponentFixture<HoursPerEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoursPerEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoursPerEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
