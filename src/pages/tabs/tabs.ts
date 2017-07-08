import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabs1Root: string;
  tabs2Root: string;
  tabs3Root: string;

  constructor() {
    this.tabs1Root = 'InboxPage';
    this.tabs2Root = 'ChannelPage';
    this.tabs3Root = 'ProfilPage';
  }


}
