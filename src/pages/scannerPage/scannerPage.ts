import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-scannerPage',
  templateUrl: 'scannerPage.html'
})
export class ScannerPage {

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
