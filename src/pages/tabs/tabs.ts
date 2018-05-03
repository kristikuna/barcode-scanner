import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ScannerPage } from '../scannerPage/scannerPage';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
    tab1Root = HomePage;
    tab2Root = ScannerPage;

    constructor() {

    }
  }