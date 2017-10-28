import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsrReccomendationPage } from './usr-reccomendation';

@NgModule({
  declarations: [
    UsrReccomendationPage,
  ],
  imports: [
    IonicPageModule.forChild(UsrReccomendationPage),
  ],
})
export class UsrReccomendationPageModule {}
