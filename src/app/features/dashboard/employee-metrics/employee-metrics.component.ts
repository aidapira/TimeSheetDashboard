import { Component, OnInit } from '@angular/core';
import { EmployeeMetrics, TimePeriod } from '../../models/employee-metrics.interface';

@Component({
  selector: 'app-employee-metrics',
  template: `
    <div class="metrics-container">
      <div class="header">
        <h2>Employee Metrics</h2>
        <select [(ngModel)]="selectedPeriod" (change)="onPeriodChange()">
          <option value="last7days">Last 7 Months</option>
          <option value="lastMonth">Last Month</option>
          <option value="last3Months">Last 3 Months</option>
          <option value="last6Months">Last 6 Months</option>
          <option value="last12Months">Last 12 Months</option>
        </select>
      </div>

      <div class="metrics-grid">
        <!-- Main Metrics -->
        <div class="metrics-row">
          <div class="metric-card">
            <div class="metric-label">Total employees</div>
            <div class="metric-value">{{metrics.totalEmployees}}</div>
            <div class="metric-growth" [class.positive]="metrics.growthRate > 0">
              {{metrics.growthRate > 0 ? '+' : ''}}{{metrics.growthRate}}%
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-label">Active Now</div>
            <div class="metric-value">{{metrics.activeNow}}</div>
            <div class="metric-growth" [class.positive]="metrics.growthRate > 0">
              {{metrics.growthRate > 0 ? '+' : ''}}{{metrics.growthRate}}%
            </div>
          </div>
        </div>

        <div class="metrics-row">
          <div class="metric-card">
            <div class="metric-label">Average hours/Week</div>
            <div class="metric-value">{{metrics.averageHoursWeek}}</div>
            <div class="metric-growth" [class.positive]="metrics.growthRate > 0">
              {{metrics.growthRate > 0 ? '+' : ''}}{{metrics.growthRate}}%
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-label">Productivity Score</div>
            <div class="metric-value">{{metrics.productivityScore}}</div>
            <div class="metric-growth" [class.positive]="metrics.growthRate > 0">
              {{metrics.growthRate > 0 ? '+' : ''}}{{metrics.growthRate}}%
            </div>
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
      font-size: 18px;
      font-weight: 600;
      color: #2B3674;
    }

    select {
      padding: 8px 12px;
      border: 1px solid #E0E0E0;
      border-radius: 6px;
      font-size: 14px;
    }

    .metrics-grid {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .metrics-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    .metric-card {
      background: #F8F9FF;
      border-radius: 8px;
      padding: 20px;
    }

    .metric-label {
      color: #707EAE;
      font-size: 14px;
      margin-bottom: 8px;
    }

    .metric-value {
      font-size: 24px;
      font-weight: 600;
      color: #2B3674;
      margin-bottom: 8px;
    }

    .metric-growth {
      font-size: 12px;
      color: #DC3545;
      &.positive {
        color: #198754;
      }
    }

    .status-indicators {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding: 16px;
      background: #F8F9FF;
      border-radius: 8px;
    }

    .status-item {
      text-align: center;
    }

    .status-label {
      color: #707EAE;
      font-size: 14px;
      margin-right: 8px;
    }

    .status-value {
      color: #2B3674;
      font-weight: 600;
    }
  `]
})
export class EmployeeMetricsComponent implements OnInit {
  selectedPeriod: TimePeriod = 'last7days';
  metrics: EmployeeMetrics = {
    totalEmployees: 5669,
    activeNow: 5669,
    averageHoursWeek: 5669,
    productivityScore: 5669,
    onLeave: 30,
    remote: 30,
    newHires: 30,
    growthRate: 15.80
  };

  constructor() {}

  ngOnInit() {
    this.loadMetrics();
  }

  onPeriodChange() {
    this.loadMetrics();
  }

  private loadMetrics() {
    // Here you would typically make an API call to get the metrics
    // For now, we're using mock data
    console.log('Loading metrics for period:', this.selectedPeriod);
  }
}