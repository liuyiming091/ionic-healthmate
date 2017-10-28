import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SigninPage } from '../auth/signin/signin';

/**
 * Generated class for the AccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-access',
  templateUrl: 'access.html',
})
export class AccessPage {
  access;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  
  register(){
    if (this.access=="1234"){
      let alert = this.alertCtrl.create({
        message: "register successfully!"
      });
      alert.present();
      this.navCtrl.push(SigninPage)
    }
    else{
      let alert = this.alertCtrl.create({
        message: "invalid access code!"
      });
      alert.present();
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessPage');
  }

}
