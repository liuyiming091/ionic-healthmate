import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAdvicePage } from './user-advice';

@NgModule({
  declarations: [
    UserAdvicePage,
  ],
  imports: [
    IonicPageModule.forChild(UserAdvicePage),
  ],
})
export class UserAdvicePageModule {}
