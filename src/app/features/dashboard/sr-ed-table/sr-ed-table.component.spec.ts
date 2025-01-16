import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrEdTableComponent } from './sr-ed-table.component';

describe('SrEdTableComponent', () => {
  let component: SrEdTableComponent;
  let fixture: ComponentFixture<SrEdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SrEdTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SrEdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
