import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

@Component({
  selector: 'page-public-profile',
  templateUrl: 'public-profile.html',
})
export class PublicProfilePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

}
