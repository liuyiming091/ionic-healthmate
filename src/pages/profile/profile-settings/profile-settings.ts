import { ProfilePage } from './../profile';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ActionSheetController, Platform, NavParams } from 'ionic-angular';
import { CropperSettings } from "ng2-img-cropper";
import * as firebase from 'firebase';

import { AuthProvider } from '../../../providers/auth/auth.provider';
import { UploadProvider } from '../../../providers/upload/upload.provider';
import { CameraProvider } from '../../../providers/camera/camera.provider';
import { UsersProvider } from '../../../providers/users/users.provider';

@Component({
  selector: 'page-profile-settings',
  templateUrl: 'profile-settings.html',
})
export class ProfileSettingsPage implements OnInit {  
  uid = firebase.auth().currentUser.uid;
  data: any;
  cropperSettings: CropperSettings;

  changingImage: boolean; 
  user: any;

  notifications: any = 'enable';
  extra_options: boolean = false; 
  stepcounter: boolean = false; 
  auto_updates: boolean = false; 
  share_data: boolean = true; 
  src;
  path;
  srcpath;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    private uploadProvider: UploadProvider,
    private cameraProvider: CameraProvider,
    private usersProvider: UsersProvider
  ) 
  {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 120;
    this.cropperSettings.height = 120;
    this.cropperSettings.croppedWidth = 120;
    this.cropperSettings.croppedHeight = 120;
    this.cropperSettings.canvasWidth = 150;
    this.cropperSettings.canvasHeight = 200;
    this.cropperSettings.rounded = true

    this.data = {};
  }

  ngOnInit() {
    // getUserSettings
    firebase.database().ref().child(`userProfiles/${this.uid}/profile/settings`).once('value').then((snap) => {
      this.notifications = snap.val().notifications;
      this.extra_options = snap.val().extra_options;
      this.stepcounter = snap.val().stepcounter;
      this.auto_updates = snap.val().auto_updates;
      this.share_data = snap.val().share_data;
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
    /*
    this.uploadProvider.getProfileImage(this.user)
    .subscribe(image => {
      this.data = image;
    })
    */
  }

  uploadImage() {
    let chooseImage = this.actionSheetCtrl.create({
      title: 'Profile picture',
      buttons: [
        {
          text: 'Gallery',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            this.changingImageClick();
          }
        },{
          text: 'Use camera',
          icon: !this.platform.is('ios') ? 'camera' : null,
          handler: () => {
            this.takePicture();
          }
        },{
          text: 'Delete picture',
          icon: !this.platform.is('ios') ? 'trash' : null,
          role: 'destructive',
          handler: () => {
            this.deleteProfileImage();
            let alert = this.alertCtrl.create({
              title: 'Profile image is deleted'
            });
            alert.present()
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
    /*
    let alert = this.alertCtrl.create({
      title: 'Upload image disabled',
      message: 'Upload image is currently disabled.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Upload disabled');
          }
        }
      ]
    });
    alert.present()
    */
  }

  changingImageClick() {
    this.changingImage = true;
  }

  takePicture() {
    console.log('takePicture() is clicked');
    // this.cameraProvider.startCamera();
  }
  
  saveProfileImage() {
    if(this.data && this.data.image){
      this.uploadProvider.uploadProfileImage(this.user, this.data.image.split(/,(.+)/)[1])
     }
    this.changingImage = false;
    let alert = this.alertCtrl.create({
      title: 'Profile image is saved'
    });
    alert.present()
  }

  deleteProfileImage() {
    this.uploadProvider.deleteProfileImage();
  }

  saveUserSettings(){
    this.usersProvider.updateUserSettings(
      firebase.auth().currentUser.uid, 
      this.notifications, 
      this.extra_options, 
      this.stepcounter, 
      this.auto_updates, 
      this.share_data);
      let alert = this.alertCtrl.create({
        title: 'Your settings are saved!'
      });
      alert.present();
  }
}
