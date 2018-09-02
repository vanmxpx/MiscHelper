import { Component, OnInit } from '@angular/core';

import { Page2Component } from '../../../page2/page2.component';

@Component({
  selector: 'ons-page[tab1]',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements OnInit {

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Initialize
   */
  ngOnInit() {
  }

  /**
   * Push page
   */
  push() {
  }

}
