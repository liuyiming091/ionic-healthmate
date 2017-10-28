import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorHomePage } from './doctor-home';

@NgModule({
  declarations: [
    DoctorHomePage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorHomePage),
  ],
})
export class DoctorHomePageModule {}
