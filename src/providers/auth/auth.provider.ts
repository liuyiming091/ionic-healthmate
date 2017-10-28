import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthProvider {
  token: string;
  public userProfile: any = null;

  constructor() {
  }

  signInUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
          .then(
              (token: string) => this.token = token
          );
        }
      )
      .catch(
          error => console.log(error)
      );
  }

  signInWithFacebook(): Promise<any>{
    const providerFacebook = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(providerFacebook)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
          .then(
              (token: string) => this.token = token
          );
        }
      )
      .catch((error) => {
        error => console.log(error)
      });
  }

  signUpUser(email: string, password: string): Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => {
      this.verificationEmail();
      firebase.database().ref('/userProfiles').child(newUser.uid)
      .set({ email: email });
      firebase.database().ref('/userProfiles').child(newUser.uid).child("/profile/info")
      .set({age: ' ', 
            height: ' ',
            weight: ' ',
            gender: ' ',
            day: ' ',
            month: ' '});
    });
  
  }

  verificationEmail(): Promise<void> {
    return firebase.auth().currentUser.sendEmailVerification();
  }
  
  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser() {
    firebase.auth().signOut();
    this.token = null;
  }

  getIdToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
