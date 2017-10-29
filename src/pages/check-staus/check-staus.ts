import { GiveRecommendationPage } from './../give-recommendation/give-recommendation';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import * as firebase from 'firebase';
import * as Chart from 'chart.js';
/**
 * Generated class for the CheckStausPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-check-staus',
  templateUrl: 'check-staus.html',
})
export class CheckStausPage {
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

  myParam;
  email;
  usrKey;
  constructor(public menu:MenuController,public params:NavParams, public navCtrl: NavController, public navParams: NavParams) {
    this.myParam=params.get('userEmail');
    console.log(this.myParam);
    this.menuActive();
    
  }

  ionViewDidLoad() {
    firebase.database().ref('/userProfiles').on('value', snap=>{
      
      snap.forEach( itemSnap=>{
        if (this.myParam==itemSnap.val().email){
          this.usrKey=itemSnap.key;
          firebase.database().ref(`/userProfiles/${this.usrKey}/profile/info`).once('value').then((snap) => {
            this.height = snap.val().height;
            this.weight = snap.val().weight;
            this.gender = snap.val().gender;
            firebase.database().ref(`/userProfiles/${this.usrKey}/profile/info/scoreRecord`).limitToLast(5).once("value", snapshot=> {
              //console.log(snapshot.val());
              //this.itemRef.child(`/userProfiles/${this.uid}/profile/info/scoreRecord`).on('value', snap=>{
                  this.items=[];
                  snapshot.forEach( itemSnap=>{
                  this.items.push(itemSnap.val());
                  return false;
                  });
                  console.log(this.items[0].score);
                  this.finalsocre=this.items[4].score;
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
        })
        return false;
      }});
    })
    console.log('ionViewDidLoad CheckStausPage');
  }
   menuActive(){
    this.activeMenu='menu2';
    this.menu.enable(false, 'menu1');
    this.menu.enable(true, 'menu2');
  }
  giveRecommendation(){
    this.navCtrl.push(GiveRecommendationPage,{"userId":this.usrKey});
  }
}
