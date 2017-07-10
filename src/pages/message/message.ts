import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProfile} from "../../models/user-profile/user.interface";
import {Message} from "../../models/messages/msg.interface";
import {MESSAGE_LIST} from "../../mocks/messages/msg.mock";

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: UserProfile;
  messageList: Message[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messageList = MESSAGE_LIST;
  }

  ionViewWillLoad(){
    this.selectedProfile = this.navParams.get('selectedUser');
  }



}
