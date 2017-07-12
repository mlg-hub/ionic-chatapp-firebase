import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {ChatServiceProvider} from "../../providers/chat/chat.service";

/**
 * Generated class for the ChannelsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, private _chatService: ChatServiceProvider) {
  }

  showAddChannelDialogue(){
    this.alertCtrl.create({
      title: 'Channel Name',
      inputs: [{
        name: 'channelName'
      }],
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this._chatService.addChannel(data.channelName)
          }
        }
      ]
    }).present();
  }
  channelStartChat(channel){
    this.navCtrl.push('ChannelChatPage', {channel: channel});
  }

}
