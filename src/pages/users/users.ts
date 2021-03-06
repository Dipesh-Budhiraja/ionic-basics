import { Component } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor(private navCtrl: NavController) {

  }

  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, { userName: name }, {
      direction: 'forward', // default for push is 'forward'
      duration: 300, // 2 seconds
      easing: 'ease-out'
    });
  }

  ionViewCanEnter(): boolean | Promise<boolean> {
    console.log('ionViewCanEnter');
    // const rnd = Math.random();
    // return rnd > 0.5;
    return true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewCanLeave(): boolean | Promise<boolean> {
    console.log('ionViewCanLeave');

    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(()=>{
        resolve(true)
      }, 1000);
    });

    return promise;
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload(){
    console.log('ionViewWillUnload');
  }
}
