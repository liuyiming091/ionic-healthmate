import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAboutPage } from './user-about';

@NgModule({
  declarations: [
    UserAboutPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAboutPage),
  ],
})
export class UserAboutPageModule {}
