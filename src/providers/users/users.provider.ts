import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UsersProvider {
  uid: any = firebase.auth().currentUser.uid;

  constructor() {
  }

  updateUserInfo(uid, age, height, weight, day, month, gender) {
    return firebase.database().ref().child(`userProfiles/${this.uid}/profile/info`)
    .update({
      age: age,
      height: height,
      weight: weight,
      day: day,
      month: month,
      gender: gender
    })
  }

  updateUserSettings(uid, notifications, extra_options, stepcounter, auto_updates, share_data) {
    return firebase.database().ref().child(`userProfiles/${this.uid}/profile/settings`)
    .update({
      notifications: notifications,
      extra_options: extra_options,
      stepcounter: stepcounter,
      auto_updates: auto_updates,
      share_data: share_data
    })
  }

}
