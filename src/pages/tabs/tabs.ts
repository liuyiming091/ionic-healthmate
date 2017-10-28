import { StatusPage } from './../status/status';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';


import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = StatusPage;

  constructor() {

  }
}
