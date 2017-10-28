import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

import { PublicProfilePage } from '../explore/public-profile/public-profile';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) 
  {
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  goToPublicProfile() {
     this.navCtrl.push(PublicProfilePage);
  }

}
