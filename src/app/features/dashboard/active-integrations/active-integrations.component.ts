// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatSelectModule } from '@angular/material/select';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { AgChartsModule } from 'ag-charts-angular';
// import { 
//   AgChartOptions, 
//   AgTooltipRendererResult, 
//   AgPieSeriesOptions 
// } from 'ag-charts-community';

// interface IntegrationData {
//   type: string;
//   value: number;
//   color: string;
// }

// @Component({
//   selector: 'app-active-integrations',
//   standalone: true,
//   imports:[CommonModule, FormsModule, MatSelectModule, MatFormFieldModule, AgChartsModule],
//   template: `
//     <div class="chart-container">
//       <div class="chart-header">
//         <h3>Active Integrations</h3>
//         <mat-form-field appearance="outline">
//           <mat-label>Time Period</mat-label>
//           <mat-select [(value)]="selectedPeriod" (selectionChange)="onPeriodChange($event.value)">
//             <mat-option *ngFor="let period of timePeriods" [value]="period">
//               {{period}}
//             </mat-option>
//           </mat-select>
//         </mat-form-field>
//       </div>

//       <div class="legend">
//         <div *ngFor="let item of integrationData" class="legend-item">
//           <div class="legend-color" [style.background-color]="item.color"></div>
//           <span>{{ item.type }}</span>
//         </div>
//       </div>

//       <ag-charts
//         [options]="chartOptions"
//         style="height: 300px;">
//       </ag-charts>
//     </div>
//   `,
//   styles: [`
//     .chart-container {
//       background: white;
//       border-radius: 8px;
//       padding: 20px;
//       box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//     }

//     .chart-header {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 20px;
//     }

//     h3 {
//       margin: 0;
//       font-size: 18px;
//       font-weight: 500;
//     }

//     .legend {
//       display: flex;
//       gap: 20px;
//       margin-bottom: 20px;
//     }

//     .legend-item {
//       display: flex;
//       align-items: center;
//       gap: 8px;
//     }

//     .legend-color {
//       width: 12px;
//       height: 12px;
//       border-radius: 50%;
//     }
//   `]
// })
// export class ActiveIntegrationsComponent implements OnInit {
//   selectedPeriod = 'This Week';
//   timePeriods = ['This Week', 'This Month', 'This Year'];

//   integrationData: IntegrationData[] = [
//     { type: 'Adoption', value: 45, color: '#6B4EFF' },
//     { type: 'Purchase', value: 35, color: '#FF784E' },
//     { type: 'Retention', value: 20, color: '#FFC107' }
//   ];

//   chartOptions: AgChartOptions = {
//     data: this.integrationData,
//     series: [{
//       type: 'pie',
//       angleKey: 'value',
//       calloutLabelKey: 'type',
//       sectorLabelKey: 'value',
//       fills: this.integrationData.map(item => item.color),
//       strokeWidth: 0,
//       innerRadiusRatio: 0.7,
//       calloutLabel: {
//         enabled: false
//       },
//       sectorLabel: {
//         enabled: false
//       },
//       tooltip: {
//         enabled: true,
//         renderer: (params): AgTooltipRendererResult => {
//           return {
//             content: `${params.datum.type}: ${params.datum.value}%`
//           };
//         }
//       }
//     } satisfies AgPieSeriesOptions],
//     legend: {
//       enabled: false
//     },
//     background: {
//       fill: 'transparent'
//     }
//   };

//   constructor() {}

//   ngOnInit() {
//     // Initial data load
//   }

//   onPeriodChange(period: string) {
//     this.selectedPeriod = period;
//     // Here you would typically fetch new data based on the selected period
//     this.updateChartData();
//   }

//   private updateChartData() {
//     // Update chart data based on selected period
//     // This is where you would typically make an API call
    
//     // For demo, we'll just update with random values
//     this.integrationData = [
//       { type: 'Adoption', value: Math.floor(Math.random() * 50) + 30, color: '#6B4EFF' },
//       { type: 'Purchase', value: Math.floor(Math.random() * 40) + 20, color: '#FF784E' },
//       { type: 'Retention', value: Math.floor(Math.random() * 30) + 10, color: '#FFC107' }
//     ];

//     // Update chart options with new data
//     this.chartOptions = {
//       ...this.chartOptions,
//       data: this.integrationData,
//       series: [{
//         ...this.chartOptions.series[0],
//         fills: this.integrationData.map(item => item.color)
//       } satisfies AgPieSeriesOptions]
//     };
//   }
// }