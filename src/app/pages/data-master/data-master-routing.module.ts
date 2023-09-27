import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataMasterPage } from './data-master.page';

const routes: Routes = [
  {
    path: '',
    component: DataMasterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataMasterPageRoutingModule {}
