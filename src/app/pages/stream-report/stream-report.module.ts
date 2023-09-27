import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreamReportPageRoutingModule } from './stream-report-routing.module';

import { StreamReportPage } from './stream-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreamReportPageRoutingModule
  ],
  declarations: [StreamReportPage]
})
export class StreamReportPageModule {}
