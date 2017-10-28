import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorAnnoucementPage } from './doctor-annoucement';

@NgModule({
  declarations: [
    DoctorAnnoucementPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorAnnoucementPage),
  ],
})
export class DoctorAnnoucementPageModule {}
