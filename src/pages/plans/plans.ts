import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { PlansSettingsPage } from './plans-settings/plans-settings';
import { ListPage } from './list/list';

import { PlansProvider } from '../../providers/plans/plans.provider';

@Component({
  selector: 'page-plans',
  templateUrl: 'plans.html',
})
export class PlansPage {
  // plans: Observable<any>;
  plans;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private plansProvider: PlansProvider) 
  {
    this.initializePlans();
    // this.plans = this.plansProvider.getAllPlans()
      //.subscribe(plans => { 
      //  this.plans = plans; 
      //  console.log(plans); 
      //})
  }  

  goToPlansSettings() {
     this.navCtrl.push(PlansSettingsPage);
  }

  goToListPage() {
     this.navCtrl.push(ListPage);
  }
  
  initializePlans() {
    this.plans = [
      'Full body',
      'Upper-lower',
      'Push-pull',
      '5x5',
      'Strength',
      'Conditioning',
      'Cycling',
      'Running'
    ];
  }

  getPlans(ev) {
    this.initializePlans();
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.plans = this.plans.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

