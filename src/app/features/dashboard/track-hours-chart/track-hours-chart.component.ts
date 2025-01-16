import { Component, OnInit, PLATFORM_ID, Inject  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AgChartOptions } from 'ag-charts-community';
import { TrackedHoursService } from './track-hours-chart.service';
import { TimePeriod } from '../../models/track-hours.interface';

@Component({
  selector: 'app-tracked-hours-chart',
  template: `
    <div class="chart-container">
      <div class="chart-header">
        <h3>Hours Tracked</h3>
        <div class="controls">
          <div class="legend">
            <div class="legend-item">
              <span class="legend-dot employee"></span>
              <span>Employee</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot client"></span>
              <span>Client</span>
            </div>
          </div>
          <select [(ngModel)]="selectedPeriod" (change)="loadChartData()">
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
        </div>
      </div>
      <ag-charts
        *ngIf="isBrowser"
        [options]="chartOptions"
        style="height: 400px; width: 100%;">
      </ag-charts>
    </div>
  `,
  styles: [`
    .chart-container {
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    h3 {
      margin: 0;
      color: #2B3674;
      font-size: 18px;
      font-weight: 600;
    }
    .controls {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    .legend {
      display: flex;
      gap: 15px;
    }
    .legend-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .legend-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    .legend-dot.employee {
      background-color: #6E62E5;
    }
    .legend-dot.client {
      background-color: #FFA500;
    }
    select {
      padding: 8px 12px;
      border: 1px solid #E0E0E0;
      border-radius: 6px;
      font-size: 14px;
    }
  `]
})
export class TrackedHoursChartComponent implements OnInit {
  isBrowser: boolean;
  selectedPeriod: TimePeriod = 'month';
  chartOptions!: AgChartOptions;

  constructor(private trackedHoursService: TrackedHoursService, @Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.chartOptions = this.createChartOptions();
    }
  }

  ngOnInit() {
    if (this.isBrowser){
      this.loadChartData();
    }
  }

  private createChartOptions(): AgChartOptions {
    return {  
      data: [],
      series: [
        {
          type: 'line',
          xKey: 'date',
          yKey: 'employeeHours',
          yName: 'Employee',
          stroke: '#6E62E5',
          marker: {
            fill: '#6E62E5',
            stroke: '#FFFFFF'
          },
          tooltip: {
            renderer: (params: any) => {
              return {
                title: new Date(params.xValue).toLocaleDateString(),
                content: `${params.yValue.toFixed(1)} hours`
              };
            }
          },
          interpolation: { type: "smooth" },
        },
        {
          type: 'line',
          xKey: 'date',
          yKey: 'clientHours',
          yName: 'Client',
          stroke: '#FFA500',
          marker: {
            fill: '#FFA500',
            stroke: '#FFFFFF'
          },
          tooltip: {
            renderer: (params: any) => {
              return {
                title: new Date(params.xValue).toLocaleDateString(),
                content: `${params.yValue.toFixed(1)} hours`
              };
            }
          },
          interpolation: { type: "smooth" },
        }
      ],
      axes: [
        {
          type: 'time' as any,
          position: 'bottom',
        },
        {
          type: 'number' as any,
          position: 'left',
          title: {
            enabled: true,
            text: 'Hours'
          }
        }
      ],
      theme: {
        palette: {
          fills: ['#6E62E5', '#FFA500'],
          strokes: ['#6E62E5', '#FFA500']
        }
      },
      padding: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
      }
    };
  }

  loadChartData() {
    if (!this.isBrowser) return;
    this.trackedHoursService.getTrackedHours(this.selectedPeriod)
      .subscribe(data => {
        this.chartOptions = {
          ...this.chartOptions,
          data: data
        };
      });
    console.log('test', this.chartOptions)
  }
}