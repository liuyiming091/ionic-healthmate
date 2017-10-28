import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SigninPage } from './signin/signin';
import { SignupPage } from './signup/signup';
import { ResetPasswordPage } from './reset-password/reset-password';

import { AuthProvider } from '../../providers/auth/auth.provider';

@NgModule({
  declarations: [
    SigninPage,
    SignupPage,
    ResetPasswordPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SigninPage,
    SignupPage,
    ResetPasswordPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AuthModule {}
