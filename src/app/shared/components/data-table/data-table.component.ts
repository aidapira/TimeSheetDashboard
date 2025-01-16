import { Component, Input, OnInit, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { GridApi, ColDef, GridReadyEvent } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular'
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// shared/components/timesheet-table/timesheet-table.component.ts

// models/timesheet.models.ts
interface EmployeeTimesheet {
  name: string;
  hoursTracked: string;
  expectedHoursTracked: string;
  hoursProject: string;
  status: string;
}

interface ClientTimesheet {
  name: string;
  timesheet: string;
  expectedTime: string;
  trackedTime: string;
  missedTime: string;
  hoursProject: string;
  performance: string;
}

type ViewType = 'employee' | 'client';

@Component({
  selector: 'app-timesheet-table',
  standalone: true,
  imports: [AgGridAngular, CommonModule, FormsModule, AgGridModule ],
  template: `
    <ag-grid-angular
      class="ag-theme-alpine"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
      [defaultColDef]="defaultColDef"
      [rowSelection]="'multiple'"
      [suppressRowClickSelection]="true"
      (gridReady)="onGridReady($event)"
      style="width: 100%; height: 500px;">
    </ag-grid-angular>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }
  `]
})
export class TimesheetTableComponent implements OnChanges {
  @Input() viewType: ViewType = 'employee';
  @Input() data: (EmployeeTimesheet | ClientTimesheet)[] = [];
  @Input() selectedPeriod: string = '';

  private gridApi!: GridApi;
  rowData: any[] = [];
  columnDefs: ColDef[] = [];
  
  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
    minWidth: 100
  };

  constructor() {
    this.setColumnDefinitions();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['viewType'] || changes['data']) {
      this.setColumnDefinitions();
      this.rowData = this.data;
    }
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  private setColumnDefinitions() {
    if (this.viewType === 'employee') {
      this.columnDefs = [
        {
          headerCheckboxSelection: true,
          checkboxSelection: true,
          width: 50,
          flex: 0
        },
        { field: 'name', headerName: 'Name' },
        { field: 'hoursTracked', headerName: 'Hours Tracked' },
        { field: 'expectedHoursTracked', headerName: 'Expected Hours Tracked' },
        { field: 'hoursProject', headerName: 'Hours/Project' },
        { 
          field: 'status', 
          headerName: 'Status',
          cellRenderer: this.statusRenderer
        }
      ];
    } else {
      this.columnDefs = [
        {
          headerCheckboxSelection: true,
          checkboxSelection: true,
          width: 50,
          flex: 0
        },
        { field: 'name', headerName: 'Name' },
        { field: 'timesheet', headerName: 'Timesheet' },
        { field: 'expectedTime', headerName: 'Expected Time' },
        { field: 'trackedTime', headerName: 'Tracked Time' },
        { field: 'missedTime', headerName: 'Missed Time' },
        { field: 'hoursProject', headerName: 'Hours/Project' },
        { field: 'performance', headerName: 'Performance' }
      ];
    }
  }

  private statusRenderer(params: any) {
    const status = params.value;
    const color = status === 'Approved' ? '#4CAF50' : '#FFA000';
    return `
      <div style="display: flex; align-items: center;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background-color: ${color}; margin-right: 6px;"></span>
        <span>${status}</span>
      </div>
    `;
  }
}