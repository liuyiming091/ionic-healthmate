import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { EmailValidator } from '../../../validators/email';
import { AuthProvider } from '../../../providers/auth/auth.provider';

@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  public resetPasswordForm: FormGroup;

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public authProvider: AuthProvider, 
              public formBuilder: FormBuilder)  
  {
    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
    });
  }

  resetPassword(){
    if (!this.resetPasswordForm.valid){
      console.log(this.resetPasswordForm.value);
    } else {
      this.authProvider.resetPassword(this.resetPasswordForm.value.email)
      .then((user) => {
        let alert = this.alertCtrl.create({
          message: "A reset link is just sent to you email",
          buttons: [
            {
              text: "Ok",
              role: 'cancel',
              handler: () => { this.navCtrl.pop(); }
            }
          ]
        });
        alert.present();
      }, (error) => {
        var errorMessage: string = error.message;
        let errorAlert = this.alertCtrl.create({
          message: errorMessage,
          buttons: [{ text: "Ok", role: 'cancel' }]
        });
        errorAlert.present();
      });
    }
  }

}
