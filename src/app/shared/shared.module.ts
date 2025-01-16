import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { AgGridModule } from '@ag-grid-community/angular';

import { CardComponent } from './components/card/card.component';
import { LoadingComponent } from './components/loading/loading.component';
// import { SummaryCardComponent } from './components/summary-card/summary-card.component';

@NgModule({
  declarations: [
    CardComponent,
    LoadingComponent,
    // SummaryCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinner,
    AgGridModule,
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AgGridModule,
    CardComponent,
    LoadingComponent,
    // SummaryCardComponent
  ],
})
export class SharedModule {}
