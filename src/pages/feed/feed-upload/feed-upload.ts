import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
  selector: 'page-feed-upload',
  templateUrl: 'feed-upload.html',
})
export class FeedUploadPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedUploadPage');
  }

}
