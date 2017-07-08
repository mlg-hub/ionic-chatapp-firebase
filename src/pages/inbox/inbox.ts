import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MESSAGE_LIST} from '../../mocks/messages/msg.mock';
import {Message} from "../../models/messages/msg.interface";

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  messageList: Message[] = MESSAGE_LIST;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.messageList)
  }

}
