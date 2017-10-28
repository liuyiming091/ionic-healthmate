import { AccessPage } from './../../access/access';
import { Component } from '@angular/core';
import { Loading, LoadingController, NavController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { EmailValidator } from '../../../validators/email';
import { AuthProvider } from '../../../providers/auth/auth.provider';

import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public signupForm: FormGroup;
  public loading: Loading;

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController, 
              public alertCtrl: AlertController, 
              public authProvider: AuthProvider, 
              public formBuilder: FormBuilder) 
  {
    this.signupForm  = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
     });
  }

  signUpUser(){
    if (!this.signupForm.valid){
      console.log(this.signupForm.value);
    } else {
      this.authProvider.signUpUser(this.signupForm.value.email, 
          this.signupForm.value.password)
      .then(() => {
        this.loading.dismiss().then( () => {
          this.navCtrl.push(AccessPage);
        });
      }, (error) => {
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

  goToSignin(): void { 
    this.navCtrl.push(SigninPage); 
  }

}
