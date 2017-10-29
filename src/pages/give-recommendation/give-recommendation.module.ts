import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiveRecommendationPage } from './give-recommendation';

@NgModule({
  declarations: [
    GiveRecommendationPage,
  ],
  imports: [
    IonicPageModule.forChild(GiveRecommendationPage),
  ],
})
export class GiveRecommendationPageModule {}
