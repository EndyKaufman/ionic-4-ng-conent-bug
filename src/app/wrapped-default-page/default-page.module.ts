import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WrappedDefaultPageComponent } from './default-page.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [WrappedDefaultPageComponent],
  exports: [WrappedDefaultPageComponent]
})
export class WrappedDefaultPageModule { }
