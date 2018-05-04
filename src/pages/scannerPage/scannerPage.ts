import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
// import { CameraPreview } from '@ionic-native/camera-preview';


@Component({
  selector: 'page-scannerPage',
  templateUrl: 'scannerPage.html'
})
export class ScannerPage {

  // constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
    
  //   this.barcodeScanner.scan().then(barcodeData => {
  //     console.log('Barcode data', barcodeData);
  //    }).catch(err => {
  //        console.log('Error', err);
  //    });
  //  }

   scanData : {};
   options : BarcodeScannerOptions;
   constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {
  }    

  scan(){
    console.log("what it is?");
    this.options = {
        prompt : "Scan your barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

        console.log(barcodeData);
        this.scanData = barcodeData;
    }, (err) => {
        console.log("Error occured : " + err);
    });         

  }
    // refresh(){
    //   window['location'].reload();
    // }
}
