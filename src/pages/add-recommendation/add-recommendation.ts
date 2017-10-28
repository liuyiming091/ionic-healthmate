import { GeneralRecommendationPage } from './../general-recommendation/general-recommendation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the AddRecommendationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-recommendation',
  templateUrl: 'add-recommendation.html',
})
export class AddRecommendationPage {
  recommendation;
  uid = firebase.auth().currentUser.uid;  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRecommendationPage');
  }

  add(){
    firebase.database().ref().child(`recommendation`)
    .push({
      content: this.recommendation
    });
    this.navCtrl.setRoot(GeneralRecommendationPage);
  }
}
