import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DefaultPageModule } from '../default-page/default-page.module';
import { HomePage } from './home.page';
import { ModalComponent } from './modal/modal.component';
import { WrappedModalComponent } from './wrapped-modal/modal.component';
import { WrappedDefaultPageModule } from '../wrapped-default-page/default-page.module';
import { WrappedHomePage } from './wrapped-home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefaultPageModule,
    WrappedDefaultPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'workaround',
        component: WrappedHomePage
      }
    ])
  ],
  declarations: [HomePage, WrappedHomePage, ModalComponent, WrappedModalComponent],
  entryComponents: [ModalComponent, WrappedModalComponent],
})
export class HomePageModule { }
