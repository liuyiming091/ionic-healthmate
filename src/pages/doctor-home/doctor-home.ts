import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { StatusPage } from './../status/status';
import { AlertController } from 'ionic-angular';
import * as firebase from 'firebase';

import { AuthProvider } from '../../providers/auth/auth.provider';

import { ProfilePage } from '../profile/profile';
import { ExplorePage } from '../explore/explore';
import { FeedPage } from '../feed/feed';
import { SigninPage } from '../auth/signin/signin';
import { SignupPage } from '../auth/signup/signup';
import { HomePage } from './../home/home';


/**
 * Generated class for the DoctorHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-home',
  templateUrl: 'doctor-home.html',
})
export class DoctorHomePage {
  activeMenu: String;
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public authProvider: AuthProvider, public menu:MenuController) 
  {
    this.menuActive();
  }

  menuActive(){
    this.activeMenu='menu2';
    this.menu.enable(false, 'menu1');
    this.menu.enable(true, 'menu2');
  }

  userEmail() {
    return firebase.auth().currentUser.email;
  }

  goTo() {
    if (this.isAuthenticated()) {
      return this.navCtrl.push(ProfilePage);
    } else {
      let alert = this.alertCtrl.create({
        title: 'Please sign in first!',
        buttons: ['Okay']
      });
      alert.present();
    }
  }

  openAuthPages(page) {
    this.navCtrl.setRoot(page.component);
  }

  onSignOut() {
    this.authProvider.logoutUser();
    this.navCtrl.setRoot(HomePage);
     let alert = this.alertCtrl.create({
      title: 'Logout is succesful!'
    });
    alert.present();
  } 
  
  // goTo() {this.navCtrl.push(ProfilePage);}
  // goTo() {this.navCtrl.push(ExplorePage);}
  // goTo() {this.navCtrl.push(FeedPage);}
    
  
  goToProfile() {
    this.navCtrl.push(ProfilePage);
 }
  
  goToSignup() {
     this.navCtrl.push(SignupPage);
  }
  
  goToSignin() {
     this.navCtrl.push(SigninPage);
  }

  isAuthenticated() {
    return this.authProvider.isAuthenticated();
  }

}
