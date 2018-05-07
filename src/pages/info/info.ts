import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-infoPage',
  templateUrl: 'info.html'
})
export class InfoPage {
  scanData: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.scanData = navParams.get('data');
  }

}
