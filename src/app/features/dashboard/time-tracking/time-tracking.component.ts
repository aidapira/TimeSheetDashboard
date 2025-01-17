import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimeTrackingService } from './time-tracking.service';
import { ViewMode, Period } from '../../models/time-tracking.interface';
import { DataTableComponent } from '../../../shared/components/data-table/data-table.component';

@Component({
  selector: 'app-time-tracked',
  template: `
    <div class="time-tracked-container">
      <div class="header">
        <h2>Time Tracked</h2>
        <div class="controls">
          <div class="view-toggle">
            <button 
              class="toggle-btn"
              [class.active]="viewMode === 'employee'"
              (click)="setViewMode('employee')"
            >
              Employee
            </button>
            <button 
              class="toggle-btn"
              [class.active]="viewMode === 'client'"
              (click)="setViewMode('client')"
            >
              Clients
            </button>
          </div>
          <select [(ngModel)]="selectedPeriod" (change)="loadData()">
            <option [value]="year" *ngFor="let year of availableYears">{{ year }}</option>
          </select>
        </div>
      </div>

      @if (tableData.length > 0) {
        <app-data-table
          [viewMode]="viewMode"
          [rowData]="tableData"
        ></app-data-table>
      } @else {
        <div class="loading">Loading data...</div>
      }
    </div>
  `,
  styles: [`
    .time-tracked-container {
      padding: 24px;
      background: #FFFFFF;
      margin-top:12px;
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      color: #1B2559;
    }

    .controls {
      display: flex;
      gap: 16px;
      align-items: center;
    }

    .view-toggle {
      display: flex;
      background: #F4F7FE;
      padding: 4px;
      border-radius: 8px;
      gap: 4px;
    }

    .toggle-btn {
      padding: 8px 16px;
      border: none;
      background: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      color: #1B2559;
      transition: all 0.3s ease;

      &.active {
        background: #4318FF;
        color: white;
      }

      &:hover:not(.active) {
        background: rgba(67, 24, 255, 0.1);
      }
    }

    select {
      padding: 8px 16px;
      border: 1px solid #E0E0E0;
      border-radius: 8px;
      font-size: 14px;
      color: #1B2559;
      background-color: white;
      cursor: pointer;
      min-width: 120px;

      &:focus {
        outline: none;
        border-color: #4318FF;
      }
    }

    .loading {
      padding: 20px;
      text-align: center;
      color: #1B2559;
      background: #F4F7FE;
      border-radius: 8px;
      margin-top: 20px;
    }
  `]
})
export class TimeTrackingComponent implements OnInit {
  viewMode: ViewMode = 'employee';
  selectedPeriod: Period = '1998';
  tableData: any[] = [];
  availableYears = ['1998', '1999', '2000', '2001', '2002'];

  constructor(private timeTrackingService: TimeTrackingService) {}

  ngOnInit() {
    // Load initial data
    this.loadData();
  }

  setViewMode(mode: ViewMode) {
    this.viewMode = mode;
    this.loadData();
  }

  loadData() {
    // Clear existing data while loading
    this.tableData = [];
    
    if (this.viewMode === 'employee') {
      this.timeTrackingService.getEmployeeData(this.selectedPeriod)
        .subscribe({
          next: (data) => {
            this.tableData = data;
          },
          error: (error) => {
            console.error('Error loading employee data:', error);
          }
        });
    } else {
      this.timeTrackingService.getClientData(this.selectedPeriod)
        .subscribe({
          next: (data) => {
            this.tableData = data;
          },
          error: (error) => {
            console.error('Error loading client data:', error);
          }
        });
    }
  }
}