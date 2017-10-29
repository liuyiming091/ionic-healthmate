import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserTimetablePage } from './user-timetable';

@NgModule({
  declarations: [
    UserTimetablePage,
  ],
  imports: [
    IonicPageModule.forChild(UserTimetablePage),
  ],
})
export class UserTimetablePageModule {}
