import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FollowProvider {
  uid: any = firebase.auth().currentUser.uid;

  basePath = `userProfiles/${this.uid}/profile`;

  constructor() {
  }

  getFollowers(uid: string) {
    return firebase.database().ref().child(`${this.basePath}/followers`);
  }
 
  getFollowing(followerId: string, followedId: string) {
    return firebase.database().ref().child(`${this.basePath}/following/${followerId}/${followedId}`);
  }

  follow(followerId: string, followedId: string) {
    firebase.database().ref().child(`${this.basePath}/followers/${followedId}`).update({ [followerId]: true });
    firebase.database().ref().child(`${this.basePath}/followers/${followerId}`).update({ [followerId]: true });
  }

  unfollow(followerId: string, followedId: string) {
    firebase.database().ref().child(`${this.basePath}/followers/${followedId}/${followerId}`).remove();
    firebase.database().ref().child(`${this.basePath}/followers/${followerId}/${followedId}`).remove();
  }
}

