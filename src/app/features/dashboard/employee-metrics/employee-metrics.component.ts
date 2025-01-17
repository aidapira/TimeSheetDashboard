import { Component, OnInit } from '@angular/core';
import { EmployeeMetricsService } from './employee-metrics.service';
import { EmployeeMetrics, TimePeriod } from '../../models/employee-metrics.interface';

@Component({
  selector: 'app-employee-metrics',
  template: `
    <div class="metrics-container">
      <div class="header">
        <h2>All employees</h2>
        <select [(ngModel)]="selectedPeriod" (change)="onPeriodChange()">
          <option value="last7days">This Week</option>
          <option value="lastMonth">Last Month</option>
          <option value="last3Months">Last 3 Months</option>
          <option value="last6Months">Last 6 Months</option>
          <option value="last12Months">Last 12 Months</option>
        </select>
      </div>

      <div class="metrics-grid">
        <!-- Main Metrics -->
        <div class="metrics-row">
          <div class="metric-card total">
            <div class="metric-header">
              <div class="metric-label">Total Employees</div>
              <div class="metric-growth" [class.positive]="metrics.growthRate > 0">
                <span>{{metrics.growthRate > 0 ? '+' : ''}}{{metrics.growthRate}}%</span>
              </div>
            </div>
            <div class="metric-value">{{metrics.totalEmployees}}</div>
          </div>

          <div class="metric-card active">
            <div class="metric-header">
              <div class="metric-label">Active Now</div>
              <div class="metric-growth" [class.positive]="metrics.growthRate > 0">
                <span>{{metrics.growthRate > 0 ? '+' : ''}}{{metrics.growthRate}}%</span>
              </div>
            </div>
            <div class="metric-value">{{metrics.activeNow}}</div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-card hours">
            <div class="metric-header">
              <div class="metric-label">Avg Hours/Week</div>
              <div class="metric-growth" [class.positive]="metrics.growthRate > 0">
                <span>{{metrics.growthRate > 0 ? '+' : ''}}{{metrics.growthRate}}%</span>
              </div>
            </div>
            <div class="metric-value">{{metrics.averageHoursWeek}}</div>
          </div>

          <div class="metric-card score">
            <div class="metric-header">
              <div class="metric-label">Productivity Score</div>
              <div class="metric-growth" [class.positive]="metrics.growthRate > 0">
                <span>{{metrics.growthRate > 0 ? '+' : ''}}{{metrics.growthRate}}%</span>
              </div>
            </div>
            <div class="metric-value">{{metrics.productivityScore}}</div>
          </div>
        </div>

        <!-- Status Indicators -->
        <div class="status-indicators">
          <div class="status-item">
            <span class="status-label">On leave:</span>
            <span class="status-value">{{metrics.onLeave}}</span>
          </div>
          <div class="status-item">
            <span class="status-label">Remote:</span>
            <span class="status-value">{{metrics.remote}}</span>
          </div>
          <div class="status-item">
            <span class="status-label">New Hires:</span>
            <span class="status-value">{{metrics.newHires}}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .metrics-container {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      margin-top: 12px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    h2 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #2B3674;
    }

    select {
      padding: 8px 16px;
      border: 1px solid #E0E0E0;
      border-radius: 8px;
      font-size: 14px;
      background-color: white;
      color: #2B3674;
      cursor: pointer;
    }

    .metrics-grid {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .metrics-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .metric-card {
      background: #F4F7FE;
      border-radius: 20px;
      padding: 20px;
      
      &.total { background: #F4F7FE; }
      &.active { background: #F1FDF4; }
      &.hours { background: #F4F7FE; }
      &.score { background: #FFF3F8; }
    }

    .metric-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .metric-label {
      color: #707EAE;
      font-size: 14px;
    }

    .metric-value {
      font-size: 28px;
      font-weight: 700;
      color: #2B3674;
    }

    .metric-growth {
      font-size: 12px;
      color: #DC3545;
      padding: 4px 8px;
      border-radius: 4px;
      background: rgba(220, 53, 69, 0.1);
      
      &.positive {
        color: #05CD99;
        background: rgba(5, 205, 153, 0.1);
      }
    }

    .status-indicators {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding: 16px;
      background: #F4F7FE;
      border-radius: 20px;
    }

    .status-item {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .status-label {
      color: #707EAE;
      font-size: 14px;
    }

    .status-value {
      color: #2B3674;
      font-size: 16px;
      font-weight: 700;
    }
  `]
})
export class EmployeeMetricsComponent implements OnInit {
  selectedPeriod: TimePeriod = 'last7days';
  metrics: EmployeeMetrics = {
    totalEmployees: 0,
    activeNow: 0,
    averageHoursWeek: 0,
    productivityScore: 0,
    onLeave: 0,
    remote: 0,
    newHires: 0,
    growthRate: 0
  };
  loading = false;

  constructor(private employeeMetricsService: EmployeeMetricsService) {}

  ngOnInit() {
    this.loadMetrics();
  }

  onPeriodChange() {
    this.loadMetrics();
  }

  private loadMetrics() {
    this.employeeMetricsService.getMetrics(this.selectedPeriod)
      .subscribe(metrics => {
        this.metrics = metrics;
      });
  }
}