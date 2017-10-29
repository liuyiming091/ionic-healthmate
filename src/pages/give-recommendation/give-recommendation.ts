import { UserListPage } from './../user-list/user-list';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the GiveRecommendationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-give-recommendation',
  templateUrl: 'give-recommendation.html',
})
export class GiveRecommendationPage {
  author;
  content;
  myParam;
  constructor(public params:NavParams,public navCtrl: NavController, public navParams: NavParams) {
    this.myParam=params.get('userId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiveRecommendationPage');
  }
  add(){
    firebase.database().ref(`/userProfiles/${this.myParam}/recommendation`)
    .push({
      author:this.author,
      content: this.content,
      date: new Date().toLocaleDateString()
    });
    this.navCtrl.setRoot(UserListPage);
  }

}
