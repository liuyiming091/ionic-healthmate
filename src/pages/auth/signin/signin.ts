import { DoctorHomePage } from './../../doctor-home/doctor-home';
import { Component } from '@angular/core';
import { Loading, LoadingController, NavController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { EmailValidator } from '../../../validators/email';
import { AuthProvider } from '../../../providers/auth/auth.provider';

import { HomePage } from '../../home/home';
import { SignupPage } from '../signup/signup';
import { ResetPasswordPage } from '../reset-password/reset-password';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  public loginForm: FormGroup;
  public loading: Loading;
  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public authProvider: AuthProvider, 
              public formBuilder: FormBuilder) 
  {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  signInUser(): void {
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      this.authProvider.signInUser(
          this.loginForm.value.email, 
          this.loginForm.value.password
      )
      .then( authData => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(DoctorHomePage);
          // this.navCtrl.setRoot(HomePage);
        });
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
    }
  }
  
  signInWithFacebook(){
    this.authProvider.signInWithFacebook()
      .then( authData => {
        this.loading.dismiss().then( () => {
          this.navCtrl.setRoot(HomePage);
        });
      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present();
  }
  
  goToSignup(): void { 
    this.navCtrl.push(SignupPage); 
  }

  goToResetPassword(): void {
     this.navCtrl.push(ResetPasswordPage); 
  }

}
