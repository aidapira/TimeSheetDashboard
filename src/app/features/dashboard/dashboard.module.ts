import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { AgChartsModule } from 'ag-charts-angular';

import { SummaryCardComponent } from '../../shared/components/summary-card/summary-card.component';

import { DashboardComponent } from './dashboard.component';
import { SummaryDashboardComponent } from './summary/summary.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { EmployeeMetricsComponent } from './employee-metrics/employee-metrics.component'
import { TrackedHoursChartComponent } from './track-hours-chart/track-hours-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SummaryDashboardComponent,
    TrackedHoursChartComponent,
    EmployeeMetricsComponent
  ],
  imports: [
    AgChartsModule,
    FormsModule,
    SharedModule,
    TimeTrackingComponent,
    SummaryCardComponent,
  ],
})
export class DashboardModule {}
