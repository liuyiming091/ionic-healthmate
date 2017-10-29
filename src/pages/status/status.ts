import { ProfilePage } from './../profile/profile';
import { AuthProvider } from './../../providers/auth/auth.provider';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { MenuController } from 'ionic-angular';
import * as Chart from 'chart.js';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
  uid = firebase.auth().currentUser.uid;

  score: number;
  generalW: number;
  height: number;
  weight : number;
  gender : string;
  advise : string;
  finalsocre: number;
  activeMenu: String;
  scores: Array<number>=[];
  items: Array<any>=[];
  itemRef: firebase.database.Reference=firebase.database().ref('/userProfiles');
  constructor(public menu:MenuController, public navCtrl: NavController, public navParams: NavParams, public authProvider:AuthProvider,
  public alertCtrl:AlertController) {
    // this.menuActive();
  }
  ionViewDidLoad() 
  {
	  firebase.database().ref().child(`/userProfiles/${this.uid}/profile/info`).once('value').then((snap) => {
      this.height = snap.val().height;
      this.weight = snap.val().weight;
      this.gender = snap.val().gender;
      // this.finalsocre=snap.val().score;
      // this.score=(100-Math.round(this.finalsocre));
	  
		firebase.database().ref(`/userProfiles/${this.uid}/profile/info/scoreRecord`).limitToLast(5).once("value", snapshot=> {
		//console.log(snapshot.val());
		//this.itemRef.child(`/userProfiles/${this.uid}/profile/info/scoreRecord`).on('value', snap=>{
        this.items=[];
        snapshot.forEach( itemSnap=>{
        this.items.push(itemSnap.val());
        return false;
        });
        console.log(this.items[0].score);
        this.finalsocre=this.items[4].score;
        this.score=(100-Math.round(this.finalsocre));
        if(this.gender == "m")
        {
          if(Math.round(this.score)<=10)
          {
            this.advise = "You are very healthy, please keep on!";
          }
          else if(Math.round(this.score)>10&&Math.round(this.score)<=20)
          {
            this.advise = "You are too heavy or too light, please improve your habits!";
          }
          else
          {
            this.advise = "You are already obese or underweight, please pay attention to diet and exercise!";
          }
        }
        else
        {
          if(Math.round(this.score)<=10)
          {
            this.advise = "You are very healthy, please keep on!";
          }
          else if(Math.round(this.score)>10&&Math.round(this.score)<=20)
          {
            this.advise = "You are too heavy or too light, please improve your habits!";
          }
          else
          {
            this.advise = "You are already obese or underweight, please pay attention to diet and exercise!";
          }
        }	
		    var canvas = <HTMLCanvasElement> document.getElementById("myChart");
	    	var ctx = canvas.getContext("2d");
        var myDoughnutChart = new Chart(ctx, {
	      	type: 'doughnut',
	      	data : {
		        labels: ['Health Score','Lost Score'],
		        datasets: [{
			      		data: [this.finalsocre, (100-this.finalsocre)],
		            backgroundColor: [
                      "#FF6384",
                     "#36A2EB"
                ]
          	}]
		
	        }
        });
		    var canvas2 = <HTMLCanvasElement> document.getElementById("myChange");
	    	var ctx1 = canvas2.getContext("2d");
        var myLineChart = new Chart(ctx1,{
		    	type: 'line',
          data: {
            labels: ["1","2","3","4","5"],
            datasets: [{
              label: '# of Score',
              data: [this.items[0].score,this.items[1].score,this.items[2].score,this.items[3].score,this.items[4].score],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero:true
                }
              }]
            }
          }
        });
    });
    });


       
  }
  // menuActive(){
  //   this.activeMenu='menu2';
  //   this.menu.enable(false, 'menu1');
  //   this.menu.enable(true, 'menu2');
  // }
    //ionViewDidEnter() {
	  	

		

		
//}
}
