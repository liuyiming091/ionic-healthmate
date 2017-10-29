import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the UserAnnoucementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-annoucement',
  templateUrl: 'user-annoucement.html',
})
export class UserAnnoucementPage {
  items: Array<any>=[];
  itemRef: firebase.database.Reference=firebase.database().ref('/annoucement')
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
    console.log('ionViewDidLoad UserAnnoucementPage');
  }

}
