import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorTimetablePage } from './doctor-timetable';
import { NgCalendarModule  } from 'ionic2-calendar';
@NgModule({
  declarations: [
    DoctorTimetablePage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorTimetablePage),
    NgCalendarModule,
  ],
})
export class DoctorTimetablePageModule {}
