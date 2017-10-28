import { DoctorAnnoucementPage } from './../doctor-annoucement/doctor-annoucement';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the AddAnnnoucementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-annnoucement',
  templateUrl: 'add-annnoucement.html',
})
export class AddAnnnoucementPage {
  title;
  annoucement;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  add(){
    firebase.database().ref().child(`annoucement`)
    .push({
      title:this.title,
      content: this.annoucement
    });
    this.navCtrl.setRoot(DoctorAnnoucementPage);
  }

}
