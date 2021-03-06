import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';
import { AaaPage } from '../aaa/aaa';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  conferenceDate = '2047-05-17';
  aaa = AaaPage
  constructor(public popoverCtrl: PopoverController) { }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }

}


