import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-summary-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div
      class="metric-card"
      [ngStyle]="{ 'background-color': backgroundColor }"
    >
      <div class="metric-content">
        <div class="metric-value">
          <span class="number">{{ value }}</span>
          <span
            class="percentage"
            [ngClass]="{ positive: isPositive, negative: !isPositive }"
          >
            {{ percentage }}%
          </span>
        </div>
        <div class="metric-label">{{ label }}</div>
      </div>
      <div class="metric-icon">
        <mat-icon>{{ icon }}</mat-icon>
      </div>
    </div>
  `,
  styles: [
    `
      .metric-card {
        padding: 20px;
        border-radius: 12px;
        color: white;
        position: relative;
        min-height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: transform 0.2s;
        cursor: pointer;
      }

      .metric-card:hover {
        transform: translateY(-2px);
      }

      .metric-content {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .metric-value {
        display: flex;
        align-items: baseline;
        gap: 8px;
      }

      .number {
        font-size: 28px;
        font-weight: 600;
      }

      .percentage {
        font-size: 14px;
        padding: 2px 6px;
        border-radius: 4px;
      }

      .positive {
        background-color: rgba(0, 255, 0, 0.2);
      }

      .negative {
        background-color: rgba(255, 0, 0, 0.2);
      }

      .metric-label {
        font-size: 14px;
        opacity: 0.9;
      }

      .metric-icon {
        padding: 8px;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.2);
      }

      mat-icon {
        font-size: 24px;
        width: 24px;
        height: 24px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryCardComponent {
  @Input() value!: number;
  @Input() percentage!: number;
  @Input() label!: string;
  @Input() icon!: string;
  @Input() backgroundColor!: string;

  get isPositive(): boolean {
    return this.percentage >= 0;
  }
}
