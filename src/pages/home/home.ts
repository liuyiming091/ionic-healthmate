import { StatusPage } from './../status/status';
import { Component } from '@angular/core';
import { AlertController, NavController, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';

import { AuthProvider } from '../../providers/auth/auth.provider';

import { ProfilePage } from '../profile/profile';
import { ExplorePage } from '../explore/explore';
import { FeedPage } from '../feed/feed';
import { SigninPage } from '../auth/signin/signin';
import { SignupPage } from '../auth/signup/signup';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  activeMenu: String;
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public menu:MenuController) 
  {
    this.menuActive();
  }

  menuActive(){
    this.activeMenu='menu1';
    this.menu.enable(true, 'menu1');
    this.menu.enable(false, 'menu2');
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
