import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorTimetablePage } from './doctor-timetable';

@NgModule({
  declarations: [
    DoctorTimetablePage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorTimetablePage),
  ],
})
export class DoctorTimetablePageModule {}
