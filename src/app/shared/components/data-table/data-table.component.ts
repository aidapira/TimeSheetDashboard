import { Component, Input, OnChanges, SimpleChanges, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, ICellRendererParams, ClientSideRowModelModule } from 'ag-grid-community';
import { ViewMode, EmployeeTimeTracking, ClientTimeTracking } from '../../../features/models/time-tracking.interface';

type TimeTrackingData = EmployeeTimeTracking | ClientTimeTracking;

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    CommonModule,
    AgGridModule
  ],
  template: `
    @if (isBrowser) {
        <ag-grid-angular
          class="time-tracking-grid"
          [rowData]="rowData"
          [columnDefs]="columnDefs"
          [defaultColDef]="defaultColDef"
          [modules]="modules"
          [rowSelection]="'multiple'"
          [suppressRowClickSelection]="true"
          (gridReady)="onGridReady($event)"
          [headerHeight]="48"
          [rowHeight]="52"
          domLayout="autoHeight"
        >
        </ag-grid-angular>
    } @else {
      <div class="loading-placeholder">Loading...</div>
    }
  `,
  styles: [`
    :host {
      display: block;
    }

    :host ::ng-deep {
      .time-tracking-grid {
        width: 100%;
      }

      .ag-header {
        background: white !important;
        border: none !important;
      }

      .ag-header-cell {
        background: white !important;
        border-bottom: 1px solid #E9EDF7 !important;
      }

      .ag-header-cell-label {
        color: #485585 !important;
        font-weight: 600 !important;
      }

      .ag-cell {
        display: flex !important;
        align-items: center !important;
        border-bottom: 1px solid #E9EDF7 !important;
        line-height: 1.5 !important;
        color: #2B3674 !important;
      }

      .ag-row {
        border: none !important;
        background: white !important;
      }

      .ag-row-hover {
        background: #F4F7FE !important;
      }

      .ag-checkbox-input-wrapper {
        border: 2px solid #6E62E5 !important;
        border-radius: 4px !important;
        width: 18px !important;
        height: 18px !important;

        &.ag-checked {
          background-color: #6E62E5 !important;
          border-color: #6E62E5 !important;
        }
      }

      .status-approved {
        color: #FF8A65 !important;
        padding: 4px 12px;
        background: #FFF6F1;
        border-radius: 16px;
        display: inline-block;
        text-align: center;
        min-width: 80px;
      }

      .hours-value {
        color: #2B3674;
        font-weight: 500;
      }
    }

    .loading-placeholder {
      height: 400px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f5f5f5;
      border-radius: 8px;
    }
  `]
})
export class DataTableComponent implements OnInit, OnChanges {
  @Input() viewMode: ViewMode = 'employee';
  @Input() rowData: TimeTrackingData[] = [];

  isBrowser: boolean;
  modules = [ClientSideRowModelModule];
  columnDefs: ColDef<TimeTrackingData>[] = [];
  defaultColDef: ColDef<TimeTrackingData> = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
    autoHeight: true,
    suppressSizeToFit: false
  };

  private employeeColumns: ColDef<EmployeeTimeTracking>[] = [
    {
      headerName: '',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 50,
      flex: 0.5,
      headerClass: 'checkbox-header',
      cellClass: 'checkbox-cell'
    },
    { 
      field: 'name',
      headerName: 'Name',
      flex: 2,
      sortable: true
    },
    { 
      field: 'trackedHours',
      headerName: 'Hours Tracked',
      cellClass: 'hours-value',
      valueFormatter: params => `${params.value}Hours`
    },
    { 
      field: 'expectedHours',
      headerName: 'Expected Hours Tracked',
      cellClass: 'hours-value',
      valueFormatter: params => `${params.value}Hours`
    },
    { 
      field: 'hoursPerProject',
      headerName: 'Hours/Project',
      cellClass: 'hours-value',
      valueFormatter: params => `${params.value}Hours`
    },
    { 
      field: 'status',
      headerName: 'Status',
      cellClass: params => `status-${params.value.toLowerCase()}`,
      valueFormatter: params => params.value
    }
  ];

  private clientColumns: ColDef<ClientTimeTracking>[] = [
    {
      headerName: '',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 50,
      flex: 0.5,
      headerClass: 'checkbox-header',
      cellClass: 'checkbox-cell'
    },
    { 
      field: 'name',
      headerName: 'Name',
      flex: 2,
      sortable: true
    },
    { 
      field: 'timesheet',
      headerName: 'Timesheet',
      cellClass: 'hours-value',
      valueFormatter: params => `${params.value}Hours`
    },
    { 
      field: 'expectedTime',
      headerName: 'Expected Time',
      cellClass: 'hours-value',
      valueFormatter: params => `${params.value}Hours`
    },
    { 
      field: 'trackedTime',
      headerName: 'Tracked Time',
      cellClass: 'hours-value',
      valueFormatter: params => `${params.value}Hours`
    },
    { 
      field: 'missedTime',
      headerName: 'Missed Time',
      cellClass: 'hours-value',
      valueFormatter: params => `${params.value}Hours`
    },
    { 
      field: 'hoursPerProject',
      headerName: 'Hours/Project',
      cellClass: 'hours-value',
      valueFormatter: params => `${params.value}Hours`
    },
    { 
      field: 'performance',
      headerName: 'Performance',
      valueFormatter: params => `${params.value}%`
    }
  ];

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.updateColumns();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ((changes['viewMode'] || changes['rowData']) && this.isBrowser) {
      this.updateColumns();
    }
  }

  private updateColumns() {
    this.columnDefs = (this.viewMode === 'employee' 
      ? this.employeeColumns 
      : this.clientColumns) as ColDef<TimeTrackingData>[];
  }

  onGridReady(params: any) {
    if (this.isBrowser) {
      setTimeout(() => {
        params.api.sizeColumnsToFit();
      });
    }
  }
}