import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, NavParams  } from 'ionic-angular';
import * as firebase from 'firebase';

import { PlansProvider } from '../../../providers/plans/plans.provider';

@Component({
  selector: 'page-plans-settings',
  templateUrl: 'plans-settings.html',
})
export class PlansSettingsPage implements OnInit { 
  uid = firebase.auth().currentUser.uid;
  
  strength_training: boolean = true; 
  cycling: boolean = true; 
  running: boolean = true; 
  other: boolean = false; 

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private plansProvider: PlansProvider) {
  }

  ngOnInit() {
    // getPlanSettings
    firebase.database().ref().child(`userProfiles/${this.uid}/plans/settings`).once('value').then((snap) => {
      this.strength_training = snap.val().strength_training;
      this.cycling = snap.val().cycling;
      this.running = snap.val().running;
      this.other = snap.val().other;
    });
  }

  savePlanSettings() {
    this.plansProvider.updatePlanSettings(
      firebase.auth().currentUser.uid, 
      this.strength_training, 
      this.cycling, 
      this.running, 
      this.other);
      let alert = this.alertCtrl.create({
        title: 'Your settings are saved!'
      });
      alert.present();
  }

}
