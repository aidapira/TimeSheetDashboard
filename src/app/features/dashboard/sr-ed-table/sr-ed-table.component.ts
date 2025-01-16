// import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http'; 
// import { ColDef } from 'ag-grid-community';
// import { SrEdService } from './sr-ed.service';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatSelectModule} from '@angular/material/select';
// import { DataTableComponent } from '../../../shared/components/data-table/data-table.component';

// interface SrEdData {
//   name: string;
//   hoursTracked: number;
//   expectedHoursTracked: number;
//   totalSrEdHours: number;
//   srEdPercentage: number;
// }

// @Component({
//   selector: 'app-sr-ed-table',
//   standalone: true,
//   imports: [CommonModule, FormsModule, HttpClientModule, DataTableComponent, MatFormFieldModule, MatSelectModule],
//   template: `
//     <div class="table-container">
//       <div class="header">
//         <h2>SR and ED summary</h2>
//         <mat-form-field appearance="outline">
//           <mat-label>Select Year</mat-label>
//           <mat-select [(ngModel)]="selectedYear" (selectionChange)="onYearChange($event.value)">
//             <mat-option *ngFor="let year of years" [value]="year">
//               {{ year }}
//             </mat-option>
//           </mat-select>
//         </mat-form-field>
//       </div>

//       <app-data-table
//         [rowData]="rowData"
//         [columnDefs]="columnDefs">
//       </app-data-table>
//     </div>
//   `,
//   styles: [`
//     .table-container {
//       margin-top: 12px;
//       padding: 20px;
//       background: white;
//       border-radius: 8px;
//       box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//     }
//     .header {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 20px;
//     }
//     h2 {
//       margin: 0;
//       font-size: 20px;
//       font-weight: 500;
//     }
//   `]
// })
// export class SrEdTableComponent implements OnInit {
//   rowData: SrEdData[] = [];
//   selectedYear = new Date().getFullYear();
//   years = Array.from({ length: 10 }, (_, i) => this.selectedYear - i);

//   columnDefs: ColDef[] = [
//     { 
//       field: 'name', 
//       headerName: 'Name',
//       checkboxSelection: true,
//       headerCheckboxSelection: true,
//       flex: 1 
//     },
//     { 
//       field: 'hoursTracked', 
//       headerName: 'Hours Tracked(H)',
//       width: 150 
//     },
//     { 
//       field: 'expectedHoursTracked', 
//       headerName: 'Expected Hours Tracked(H)',
//       width: 200 
//     },
//     { 
//       field: 'totalSrEdHours', 
//       headerName: 'Total SR and ED Hours(H)',
//       width: 200 
//     },
//     { 
//       field: 'srEdPercentage', 
//       headerName: 'SR and ED%',
//       width: 120,
//       valueFormatter: params => `${params.value}%`
//     }
//   ];

//   constructor(
//     private srEdService: SrEdService,
//     private cdr: ChangeDetectorRef
//   ) {}

//   ngOnInit() {
//     this.loadData();
//   }

//   onYearChange(year: number) {
//     this.selectedYear = year;
//     this.loadData();
//     console.log(this.rowData)
//   }

//   private loadData() {
//     this.srEdService.getSrEdData(this.selectedYear).subscribe(
//       data => {
//         this.rowData = data;
//         this.cdr.detectChanges();
//       }
//     );
//   }
// }