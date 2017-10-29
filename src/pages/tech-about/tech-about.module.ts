import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TechAboutPage } from './tech-about';

@NgModule({
  declarations: [
    TechAboutPage,
  ],
  imports: [
    IonicPageModule.forChild(TechAboutPage),
  ],
})
export class TechAboutPageModule {}
