import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';


@NgModule({
  declarations: [CardListComponent],
  imports: [
    CommonModule
  ],
  exports: [CardListComponent]
})
export class SharedModule {

}
