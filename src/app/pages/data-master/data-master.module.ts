import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataMasterPageRoutingModule } from './data-master-routing.module';

import { DataMasterPage } from './data-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataMasterPageRoutingModule
  ],
  declarations: [DataMasterPage]
})
export class DataMasterPageModule {}
