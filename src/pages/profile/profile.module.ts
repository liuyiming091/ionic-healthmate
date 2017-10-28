import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ProfilePage } from './profile';
import { ProfileSettingsPage } from './profile-settings/profile-settings';

import { ImageCropperComponent } from "ng2-img-cropper";

@NgModule({
  declarations: [
    ProfilePage,
    ProfileSettingsPage,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    IonicModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ProfilePage,
    ProfileSettingsPage,
    ImageCropperComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class ProfileModule {}
