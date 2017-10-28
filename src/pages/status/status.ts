import { ProfilePage } from './../profile/profile';
import { AuthProvider } from './../../providers/auth/auth.provider';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { MenuController } from 'ionic-angular';


/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  activeMenu: String;
  items: Array<any>=[];
  itemRef: firebase.database.Reference=firebase.database().ref('/userProfiles')
  constructor(public menu:MenuController, public navCtrl: NavController, public navParams: NavParams, public authProvider:AuthProvider,
  public alertCtrl:AlertController) {
    this.menuActive();
  }
  
  menuActive(){
    this.activeMenu='menu2';
    this.menu.enable(false, 'menu1');
    this.menu.enable(true, 'menu2');
  }
  ionViewDidLoad() {

    this.itemRef.limitToLast(3).on('value', snap=>{
      this.items=[];
      snap.forEach( itemSnap=>{
        this.items.push(itemSnap.val());
        return false;
      });
    })
    console.log('ionViewDidLoad StatusPage');
  }

}
