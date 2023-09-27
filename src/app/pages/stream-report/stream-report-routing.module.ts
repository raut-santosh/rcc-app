import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StreamReportPage } from './stream-report.page';

const routes: Routes = [
  {
    path: '',
    component: StreamReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StreamReportPageRoutingModule {}
