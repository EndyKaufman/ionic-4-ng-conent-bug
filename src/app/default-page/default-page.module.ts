import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DefaultPageComponent } from './default-page.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [DefaultPageComponent],
  exports: [DefaultPageComponent]
})
export class DefaultPageModule { }
