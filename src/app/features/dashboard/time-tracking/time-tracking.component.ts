// components/timesheet-container/timesheet-container.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimesheetService } from './time-tracking.service';
import { ViewType } from '../../models/time-tracking.interface';
import { MatFormField } from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TimesheetTableComponent } from 'src/app/shared/components/data-table/data-table.component';

@Component({
  selector: 'app-timesheet-container',
  standalone: true,
  imports: [FormsModule, MatFormField, MatButtonToggleModule, MatLabel, MatSelectModule, TimesheetTableComponent],
  template: `
    <div class="timesheet-container">
      <!-- View Type Selection -->
      <div class="controls-row">
        <mat-button-toggle-group
          [(ngModel)]="currentView"
          (change)="onViewChange()">
          <mat-button-toggle value="employee">Employee</mat-button-toggle>
          <mat-button-toggle value="client">Client</mat-button-toggle>
        </mat-button-toggle-group>

        <!-- Period Selection -->
        <mat-form-field>
          <mat-label>Select Period</mat-label>
          <mat-select [(ngModel)]="selectedPeriod" (selectionChange)="onPeriodChange()">
            <mat-option *ngFor="let period of periods" [value]="period.value">
              {{ period.label }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>

      <!-- Shared Table Component -->
      <app-timesheet-table
        [viewType]="currentView"
        [data]="timesheetData"
        [selectedPeriod]="selectedPeriod">
      </app-timesheet-table>
    </div>
  `,
  styles: [`
    .timesheet-container {
      padding: 20px;
    }
    .controls-row {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
      align-items: center;
    }
  `]
})
export class TimeTrackingComponent implements OnInit {
  currentView: ViewType = 'employee';
  selectedPeriod: string = '2024-01';
  timesheetData: any[] = [];

  periods = [
    { value: '2024-01', label: 'January 2024' },
    { value: '2024-02', label: 'February 2024' },
    // Add more periods...
  ];

  // constructor(private timesheetService: TimesheetService) {}
  timesheetService = inject(TimesheetService);

  ngOnInit() {
    this.loadData();
  }

  onViewChange() {
    this.loadData();
  }

  onPeriodChange() {
    this.loadData();
  }

  private loadData() {
    if (this.currentView === 'employee') {
      this.timesheetService.getEmployeeTimesheets(this.selectedPeriod)
        .subscribe(data => this.timesheetData = data);
    } else {
      this.timesheetService.getClientTimesheets(this.selectedPeriod)
        .subscribe(data => this.timesheetData = data);
    }
  }
}