import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the UsrReccomendationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-usr-reccomendation',
  templateUrl: 'usr-reccomendation.html',
})
export class UsrReccomendationPage {
  uid = firebase.auth().currentUser.uid;  
  items: Array<any>=[];
  itemRef: firebase.database.Reference=firebase.database().ref(`/userProfiles/${this.uid}/recommendation`)
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    this.itemRef.on('value', snap=>{
      this.items=[];
      snap.forEach( itemSnap=>{
        this.items.push(itemSnap.val());
        return false;
      });
    })
    console.log('ionViewDidLoad UsrReccomendationPage');
  }

  button(){
    firebase.database().ref().child(`userProfiles/${this.uid}/recommendation`)
    .push({
      content: "good exercise!"
    });
  }
  
  goto(){
    this.navCtrl.push(ProfilePage);
  }

}
