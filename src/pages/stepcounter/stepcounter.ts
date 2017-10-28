import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { Stepcounter } from '@ionic-native/stepcounter';

import { AuthProvider } from '../../providers/auth/auth.provider';

@Component({
  selector: 'page-stepcounter',
  templateUrl: 'stepcounter.html',
})
export class StepcounterPage {
  startingOffset = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider: AuthProvider,
    private stepcounter: Stepcounter) 
  {
  }

  startStepcounter() {
    this.stepcounter.start(this.startingOffset)
      .then(onSuccess => console.log('stepcounter-start success', onSuccess), 
      onFailure => console.log('stepcounter-start error', onFailure));
  }

  stopStepcounter() {
    this.stepcounter.stop()
      .then(onSuccess => console.log('stepcounter-stop success', onSuccess), 
      onFailure => console.log('stepcounter-stop error', onFailure));
  }

  getTodayStepcounter() {
    this.stepcounter.getTodayStepCount()
      .then(onSuccess => console.log('stepcounter-today success', onSuccess), 
      onFailure => console.log('stepcounter-today error', onFailure));
  }
  
  historyStepcounter() {
    this.stepcounter.getHistory()
      .then(historyObj => console.log('stepcounter-history success', historyObj), 
      onFailure => console.log('stepcounter-history error', onFailure));
  } 
}
