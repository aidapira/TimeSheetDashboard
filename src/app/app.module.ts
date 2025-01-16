// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, withFetch } from '@angular/common/http';  // Import this

import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { provideHttpClient } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';

import { TimesheetService } from './features/dashboard/time-tracking/time-tracking.service';
import { HoursPerEmployeeService } from './features/dashboard/hours-per-employee/hours-per-employee.service';
import { EmployeeMetricsService } from './features/dashboard/employee-metrics/employee-metrics.service';
import { TrackedHoursService } from './features/dashboard/track-hours-chart/track-hours-chart.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    RouterOutlet,
    CommonModule,
    DashboardModule,
    HttpClientModule,  // Add this
    SharedModule,
    AgGridModule,
    AgGridAngular,
  ],
  providers: [provideHttpClient(), TimesheetService, HoursPerEmployeeService, EmployeeMetricsService, TrackedHoursService],
})
export class AppModule { }