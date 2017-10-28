import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRecommendationPage } from './add-recommendation';

@NgModule({
  declarations: [
    AddRecommendationPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRecommendationPage),
  ],
})
export class AddRecommendationPageModule {}
