import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CardListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CardListComponent]
})
export class SharedModule {

}
