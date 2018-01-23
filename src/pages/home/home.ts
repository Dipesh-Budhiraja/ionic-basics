import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersPage } from '../users/users';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usrPage = UsersPage;

  //LONG METHOD
  constructor(public navCtrl: NavController) {

  }

  onGoToUsers() {
    this.navCtrl.push(this.usrPage)
      .then((msg) => msg ? console.log('Move Along: ' + msg)
        : console.log('Access Denied: ' + msg));
  }
}
