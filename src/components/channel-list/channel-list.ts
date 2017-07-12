import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {ChatServiceProvider} from "../../providers/chat/chat.service";
import {Channel} from "../../models/channel/channel.interface";
import {LoadingController} from "ionic-angular";
import {FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'channel-list-component',
  templateUrl: 'channel-list.html'
})
export class ChannelListComponent implements OnInit{

  channelList: FirebaseListObservable<Channel>;
  @Output() channelChat: EventEmitter<Channel>;
  constructor(private _chatService: ChatServiceProvider, private loading: LoadingController) {
      this.channelChat = new EventEmitter<Channel>();
  }
  ngOnInit(): void{
    // setTimeout()
    this.loading.create({
      content: 'loading...',
      duration: 3000
    }).present();
    setTimeout( () => {
      this.getChannels()
    },2000 );

  }

  getChannels(){
    this.channelList = this._chatService.getChannelListReference();
  }

  selectedChannel(channel: Channel){
    this.channelChat.emit(channel);
}


}
