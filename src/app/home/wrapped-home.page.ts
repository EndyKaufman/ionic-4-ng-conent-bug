import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { WrappedModalComponent } from './wrapped-modal/modal.component';

@Component({
  selector: 'app-wrapped-home',
  templateUrl: 'wrapped-home.page.html',
  styleUrls: ['home.page.scss'],
})
export class WrappedHomePage {
  constructor(public modalController: ModalController) { }

  async openModal(message: string) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { message: message }
    });
    return await modal.present();
  }
  async openWrappedModal(message: string) {
    const modal = await this.modalController.create({
      component: WrappedModalComponent,
      componentProps: { message: message }
    });
    return await modal.present();
  }
}
