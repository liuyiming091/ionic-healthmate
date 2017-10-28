import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the DoctorTimetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-timetable',
  templateUrl: 'doctor-timetable.html',
})
export class DoctorTimetablePage {
  activeMenu: String;
  constructor(public menu:MenuController, public navCtrl: NavController, public navParams: NavParams) {
    this.menuActive();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorTimetablePage');
  }

  menuActive(){
    this.activeMenu='menu2';
    this.menu.enable(false, 'menu1');
    this.menu.enable(true, 'menu2');
  }
}
