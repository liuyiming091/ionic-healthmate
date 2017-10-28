import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccessPage } from './access';

@NgModule({
  declarations: [
    AccessPage,
  ],
  imports: [
    IonicPageModule.forChild(AccessPage),
  ],
})
export class AccessPageModule {}
