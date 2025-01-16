import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveIntegrationsComponent } from './active-integrations.component';

describe('ActiveIntegrationsComponent', () => {
  let component: ActiveIntegrationsComponent;
  let fixture: ComponentFixture<ActiveIntegrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveIntegrationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
