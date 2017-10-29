import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the UserAdvicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-advice',
  templateUrl: 'user-advice.html',
})
export class UserAdvicePage {
  activeMenu: String;
  items: Array<any>=[];
  itemRef: firebase.database.Reference=firebase.database().ref('/recommendation')
  constructor(public menu:MenuController, public navCtrl: NavController, public navParams: NavParams
  ) {
    // this.menuActive();
  }

  // menuActive(){
  //   this.activeMenu='menu2';
  //   this.menu.enable(false, 'menu1');
  //   this.menu.enable(true, 'menu2');
  // }

  ionViewDidLoad() {

    this.itemRef.on('value', snap=>{
      this.items=[];
      snap.forEach( itemSnap=>{
        this.items.push(itemSnap.val());
        return false;
      });
    })
    console.log('ionViewDidLoad StatusPage');
  }

}
