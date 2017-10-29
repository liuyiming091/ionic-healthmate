import { DocEventModalPage } from './../doc-event-modal/doc-event-modal';
import { Component } from '@angular/core';
import { MenuController,NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the UserTimetablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-timetable',
  templateUrl: 'user-timetable.html',
})
export class UserTimetablePage {
  activeMenu: String;
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
 
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  
  constructor(
    // private localNotifications: LocalNotifications,
    public menu:MenuController,public navCtrl: NavController, 
    private modalCtrl: ModalController, private alertCtrl: AlertController) {
      this.menuActive();
    //   localNotifications.on("click", (notification, state) => {
    //     let alert = alertCtrl.create({
    //         title: "Notification Clicked",
    //         subTitle: "You just clicked the scheduled notification",
    //         buttons: ["OK"]
    //     });
    //     alert.present();
    // });
    }
 
  addEvent() {
    let modal = this.modalCtrl.create('DocEventModalPage', {selectedDay: this.selectedDay});
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;
 
        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);
 
        let events = this.eventSource;
        events.push(eventData);
      //   this.localNotifications.schedule({
      //     title: "Test Title",
      //     text: "Delayed Notification",
      //     at: new Date(new Date().getTime() + 5 * 1000),
      //     sound: null
      // });
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
 
  menuActive(){
    this.activeMenu='menu1';
    this.menu.enable(false, 'menu2');
    this.menu.enable(true, 'menu1');
  }

}
