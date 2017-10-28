import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralRecommendationPage } from './general-recommendation';

@NgModule({
  declarations: [
    GeneralRecommendationPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralRecommendationPage),
  ],
})
export class GeneralRecommendationPageModule {}
