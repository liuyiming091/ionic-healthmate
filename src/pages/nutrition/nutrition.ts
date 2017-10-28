import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

import { NutritionProvider } from '../../providers/nutrition/nutrition.provider';

@Component({
  selector: 'page-nutrition',
  templateUrl: 'nutrition.html',
})
export class NutritionPage {
  nutrition: string = "breakfast";
  nutritionId: any;
  image: any;
  title: any;
  content: any;

  nutri: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private nutritionProvider: NutritionProvider) 
  {
    this.nutritionProvider.getAllNutrition()
      .subscribe(nutri => { 
        this.nutri = Array.of(nutri); 
        console.log(nutri) 
      })
  }
  
  /*
  saveNutritionTest() {
    this.nutritionProvider.updateNutritionTest(
      this.nutritionId,
      this.image,
      this.title,
      this.content);
  }
  */

}
