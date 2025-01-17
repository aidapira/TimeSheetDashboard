import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-summary-dashboard',
  template: `
    <div class="metrics-container">
      <app-summary-card
        [value]="5669"
        [percentage]="-15.05"
        label="Total number of Clients"
        icon="people"
        backgroundColor="#6B4EFF"
      >
      </app-summary-card>

      <app-summary-card
        [value]="09"
        [percentage]="-15.05"
        label="Total number of Employees"
        icon="badge"
        backgroundColor="#FF784E"
      >
      </app-summary-card>

      <app-summary-card
        [value]="5609"
        [percentage]="10.15"
        label="Total number of Hours"
        icon="schedule"
        backgroundColor="#4CAF50"
      >
      </app-summary-card>

      <app-summary-card
        [value]="56"
        [percentage]="-4.75"
        label="Total Projects Done"
        icon="work"
        backgroundColor="#FF4E4E"
      >
      </app-summary-card>
    </div>
  `,
  styles: [
    `
      .metrics-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 20px;
        padding-bottom: 20px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryDashboardComponent {}
