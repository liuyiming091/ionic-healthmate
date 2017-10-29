import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocEventModalPage } from './doc-event-modal';

@NgModule({
  declarations: [
    DocEventModalPage,
  ],
  imports: [
    IonicPageModule.forChild(DocEventModalPage),
  ],
})
export class DocEventModalPageModule {}
