import { Component, OnInit, Input } from '@angular/core';
import { AlertController, NavController, ActionSheetController, Platform, NavParams } from 'ionic-angular';
import { size } from "lodash";
import * as firebase from 'firebase';

import { FollowProvider } from '../../providers/follow/follow.provider';
import { AuthProvider } from '../../providers/auth/auth.provider';
import { UsersProvider } from '../../providers/users/users.provider';

import { ProfileSettingsPage } from '../profile/profile-settings/profile-settings';
import { ResetPasswordPage } from '../auth/reset-password/reset-password';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  uid = firebase.auth().currentUser.uid;  
   
  followerCount: number;
  followers;

  age: number;
  weight: number;
  height: number;
  gender: string;
  day: number;
  month: number;
  src;
  srcpath: string;
  path:string;
  
  score: number;
  generalW: number;
  finalscore: number;
  // year: number = 1991;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController, 
    public platform: Platform,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    private usersProvider: UsersProvider,
    private followProvider: FollowProvider) 
  {
  }
  
  ionViewDidLoad() {
    // getUserInfo
    firebase.database().ref().child(`userProfiles/${this.uid}/profile/info`).once('value').then((snap) => {
      this.age = snap.val().age;
      this.height = snap.val().height;
      this.weight = snap.val().weight;
      this.day = snap.val().day;
      this.month = snap.val().month;
      this.gender = snap.val().gender;
    });
    firebase.database().ref().child(`userProfiles/${this.uid}/profile/image`).on('value', snap => {
      this.src=snap.val().filename;
      this.path ="gs://healthmate-fea30.appspot.com/profile/"+this.src;
      firebase.storage().refFromURL(`${this.path}`).getDownloadURL().then(
        
        url =>{
        this.srcpath = url;
        }
      )
    });
    
  }  
  
  changeImage() {
    let chooseImage = this.actionSheetCtrl.create({
      title: 'Profile picture',
      buttons: [
        {
          text: 'Change profile picture',
          icon: !this.platform.is('ios') ? 'settings' : null,
          handler: () => {
            this.goToSettings();
          }
        },{
          text: 'Cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    chooseImage.present();
  }

  userEmail() {
    return firebase.auth().currentUser.email;
  }

  saveUserInfo(): void {
    this.usersProvider.updateUserInfo(
      firebase.auth().currentUser.uid, 
      this.age, 
      this.height, 
      this.weight, 
      this.day, 
      this.month, 
      this.gender);

      firebase.database().ref().child(`/userProfiles/${this.uid}/profile/info`).once('value').then((snap) => {
        this.height = snap.val().height;
        this.weight = snap.val().weight;
        this.gender = snap.val().gender;
        if(this.gender == "m")
        {
          
          this.generalW = (this.height-80)*0.7;
          this.score = (Math.abs(this.weight-this.generalW)/this.generalW)*100;
        }
        else
        {
          this.generalW = (this.height-70)*0.6;
          this.score = (Math.abs(this.weight-this.generalW)/this.generalW)*100;
        }
        this.finalscore = (100-Math.round(this.score));
        firebase.database().ref().child(`/userProfiles/${this.uid}/profile/info/scoreRecord`).push({
          score: this.finalscore
        });
      });

      let alert = this.alertCtrl.create({
        title: 'Your settings are saved!'
      });
      alert.present();
  }

  goToSettings(): void {
     this.navCtrl.push(ProfileSettingsPage); 
  }

  goToResetPassword(): void {
     this.navCtrl.push(ResetPasswordPage); 
  }


    
}
