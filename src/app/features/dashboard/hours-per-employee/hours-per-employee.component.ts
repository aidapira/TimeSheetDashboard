// import { Component, OnInit } from '@angular/core';
// import { AgChartOptions } from 'ag-charts-community';
// import { HoursPerEmployeeService } from './hours-per-employee.service';
// import { FormsModule } from '@angular/forms';
// import { AgChartsModule } from 'ag-charts-angular';

// @Component({
//   selector: 'app-hours-chart',
//   standalone: true,
//   imports:[FormsModule, AgChartsModule],
//   template: `
//     <div class="chart-container">
//       <h3>Hours Per employee</h3>
//       <div class="period-selector">
//         <select [(ngModel)]="selectedPeriod" (change)="loadChartData()">
//           <option value="Monthly">Monthly</option>
//           <option value="Weekly">Weekly</option>
//           <option value="Daily">Daily</option>
//         </select>
//       </div>
//       <ag-charts
//         [options]="chartOptions"
//         style="height: 300px; width: 100%;">
//       </ag-charts>
//     </div>
//   `,
//   styles: [`
//     .chart-container {
//       background: white;
//       border-radius: 12px;
//       padding: 20px;
//       box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
//     }
//     h3 {
//       margin: 0 0 15px 0;
//       color: #2B3674;
//       font-size: 18px;
//       font-weight: 600;
//     }
//     .period-selector {
//       margin-bottom: 15px;
//     }
//     select {
//       padding: 8px 12px;
//       border: 1px solid #E0E0E0;
//       border-radius: 6px;
//       font-size: 14px;
//     }
//   `]
// })
// export class HoursChartComponent implements OnInit {
//   selectedPeriod: string = 'Monthly';
  
//   chartOptions: AgChartOptions = {
//     series: [{
//       type: 'pie' as any,
//       angleKey: 'hours',
//       legendItemKey: 'type',
//       sectorLabelKey: 'type',
//       calloutLabelKey: 'type',
//       fills: ['#6E62E5', '#FFA500'],
//       strokeWidth: 0,
//       calloutStrokeWidth: 1,
//       calloutStroke: '#2B3674',
//       calloutLabel: {
//         enabled: true,
//       },
//       sectorLabel: {
//         enabled: false
//       },
//       tooltip: {
//         enabled: true,
//         renderer: (params: any) => {
//           return {
//             title: params.datum.type,
//             content: `${params.datum.hours} hours`
//           };
//         }
//       }
//     }],
//     legend: {
//       position: 'bottom',
//       item: {
//         label: {
//           fontFamily: 'Inter',
//           fontSize: 14,
//           color: '#2B3674'
//         },
//         marker: {
//           padding: 8,
//           shape: 'square',
//           size: 10
//         },
//         paddingX: 20
//       }
//     },
//     padding: {
//       top: 20,
//       right: 20,
//       bottom: 40,
//       left: 20
//     }
//   };

//   constructor(private hoursPerEmployeeService: HoursPerEmployeeService) {}

//   ngOnInit() {
//     this.loadChartData();
//   }

//   loadChartData() {
//     this.hoursPerEmployeeService.getHoursData(this.selectedPeriod).subscribe((data: any) => {
//       this.chartOptions = {
//         ...this.chartOptions,
//         data: data
//       };
//     });
//   }
// }