import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Channel} from "../../models/channel/channel.interface";
import {ChatServiceProvider} from "../../providers/chat/chat.service";
import {FirebaseListObservable} from "angularfire2/database";
import {ChannelMessage} from "../../models/channel/channel-messages.interface";

/**
 * Generated class for the ChannelChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-channel-chat',
  templateUrl: 'channel-chat.html',
})
export class ChannelChatPage {

  channel: Channel;
  channelMessage: FirebaseListObservable<ChannelMessage[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _chatService: ChatServiceProvider) {
  }

  ionViewWillLoad() {
    this.channel = this.navParams.get('channel');
    this.channelMessage = this._chatService.getChannelChatRef(this.channel.$key);
  }
  sentMessage(content: string){
    let channelMessage: ChannelMessage = {content};
    this._chatService.sendChannelMessage(this.channel.$key, channelMessage)
  }

}
