import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAnnoucementPage } from './user-annoucement';

@NgModule({
  declarations: [
    UserAnnoucementPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAnnoucementPage),
  ],
})
export class UserAnnoucementPageModule {}
