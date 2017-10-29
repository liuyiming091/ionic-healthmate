import { UserTimetablePage } from './../pages/user-timetable/user-timetable';
import { TechAboutPage } from './../pages/tech-about/tech-about';
import { UserAboutPage } from './../pages/user-about/user-about';
import { UserAdvicePage } from './../pages/user-advice/user-advice';
import { UserAnnoucementPage } from './../pages/user-annoucement/user-annoucement';
import { GeneralRecommendationPage } from './../pages/general-recommendation/general-recommendation';
import { DoctorTimetablePage } from './../pages/doctor-timetable/doctor-timetable';
import { DoctorAnnoucementPage } from './../pages/doctor-annoucement/doctor-annoucement';
import { UserListPage } from './../pages/user-list/user-list';
import { UsrReccomendationPage } from './../pages/usr-reccomendation/usr-reccomendation';
import { Component, ViewChild, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { AlertController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from '../providers/auth/auth.provider';

// Public pages
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/auth/signin/signin';

// Authenticated pages
import { FeedPage } from '../pages/feed/feed';
import { ProfilePage } from '../pages/profile/profile';
import { PlansPage } from '../pages/plans/plans';
import { NutritionPage } from '../pages/nutrition/nutrition';
import { ExplorePage } from '../pages/explore/explore';
import { StepcounterPage } from '../pages/stepcounter/stepcounter';
import { StatusPage } from './../pages/status/status';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;
  doctorPages: Array<{title: string, component: any}>;
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public authProvider: AuthProvider,
    public alertCtrl: AlertController,) 
  {
    this.initializeApp();
    this.pages = [
      { title: 'status', component: StatusPage },
      { title: 'My profile', component: ProfilePage },
      { title: 'TimeTable', component:UserTimetablePage},
      { title: 'Recommendations', component: UsrReccomendationPage },
      { title: 'Annoucements', component: UserAnnoucementPage},
      { title: 'General Advice', component: UserAdvicePage },
      { title: 'About', component: UserAboutPage},
    ];


    this.doctorPages = [
      { title: 'users', component: UserListPage},
      { title: 'Announcements', component: DoctorAnnoucementPage },
      { title: 'Timetable', component: DoctorTimetablePage },
      { title: 'Recommendations', component: GeneralRecommendationPage },
      { title: 'About', component: TechAboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // Public pages
  homePage() {
    this.nav.setRoot(HomePage);
  }

  signInPage() {
    this.nav.setRoot(SigninPage);
  }

  // Authenticated pages
  openAuthPages(page) {
    this.nav.setRoot(page.component);
  }

  onSignOut() {
    this.authProvider.logoutUser();
    this.nav.setRoot(HomePage);
     let alert = this.alertCtrl.create({
      title: 'Logout is succesful!'
    });
    alert.present();
  } 

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCmbV8je38eRgy0PEu3hMolklPCGb7czEU",
      authDomain: "healthmate-fea30.firebaseapp.com",
      databaseURL: "https://healthmate-fea30.firebaseio.com",
      projectId: "healthmate-fea30",
      storageBucket: "healthmate-fea30.appspot.com",
      messagingSenderId: "208232660872"
    });
  }
}
