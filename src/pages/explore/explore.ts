import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AlertController, NavController, ActionSheetController, Platform, NavParams } from 'ionic-angular';
import { size } from "lodash";
import * as firebase from 'firebase';

import { FollowProvider } from '../../providers/follow/follow.provider';

import { PublicProfilePage } from './public-profile/public-profile';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage implements OnInit, OnDestroy {
  uid: any = firebase.auth().currentUser.uid;
  key: any = firebase.database().ref(); ////////////////////////////

  basePath = `userProfiles/${this.uid}/profile`;

  @Input() user;
  @Input() currentUser; 
  
  followerCount: number;
  isFollowing: boolean;
  followers;
  following;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController, 
    public platform: Platform,
    public navParams: NavParams,
    private followProvider: FollowProvider) 
  {
  }

  ngOnInit() {
    // const userId = this.user.$key
    // const currentUserId = firebase.auth().currentUser.uid;

    // this.followProvider.getFollowers;
    // this.followProvider.getFollowing;

  }
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  private countFollowers(followers) {
    if (followers.$value === null) { 
      return 0
    } else { 
      return size(followers) 
    }
  }
  
  /*
  toggleFollow() {
    const userId = this.user.$key
    const currentUserId = this.currentUser.uid

    if (this.isFollowing) { 
      this.followProvider.unfollow(currentUserId, userId) 
    } else { 
      this.followProvider.follow(currentUserId, userId) 
    }
  }*/

  goToPublicProfile() {
     this.navCtrl.push(PublicProfilePage);
  }

  ngOnDestroy() {
    // this.followers.unsubscribe()
    // this.following.unsubscribe()
  }



}
