import { AddAnnnoucementPage } from './../add-annnoucement/add-annnoucement';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { MenuController } from 'ionic-angular';
/**
 * Generated class for the DoctorAnnoucementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-annoucement',
  templateUrl: 'doctor-annoucement.html',
})
export class DoctorAnnoucementPage {
  activeMenu: String;
  items: Array<any>=[];
  itemRef: firebase.database.Reference=firebase.database().ref('/annoucement')
  constructor(public menu:MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.menuActive();
  }
  menuActive(){
    this.activeMenu='menu2';
    this.menu.enable(false, 'menu1');
    this.menu.enable(true, 'menu2');
  }

  gotoAdd(){
    this.navCtrl.push(AddAnnnoucementPage);
  }
  ionViewDidLoad() {

    this.itemRef.on('value', snap=>{
      this.items=[];
      snap.forEach( itemSnap=>{
        this.items.push(itemSnap.val());
        return false;
      });
    })
  }


}
