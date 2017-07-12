import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
// import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';
import {Observable} from 'rxjs/Observable';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Channel} from "../../models/channel/channel.interface";
import {ChannelMessage} from "../../models/channel/channel-messages.interface";
import {Message} from "../../models/messages/msg.interface";
import {AuthServiceProvider} from "../auth-service/auth-service";

@Injectable()
export class ChatServiceProvider {

  constructor(private _aDatabase: AngularFireDatabase, private _aAuth: AuthServiceProvider) {
  }

  addChannel(channelName: string){
    this._aDatabase.list(`channels-name`).push({name: channelName});
  }
  getChannelListReference(): FirebaseListObservable<Channel>{
    return this._aDatabase.list(`channels-name`);
  }
  getChannelChatRef(channelKey: string){
    return this._aDatabase.list(`channels/${channelKey}`);
  }

  async sendChannelMessage(channelKey: string, message:ChannelMessage){
      await this._aDatabase.list(`channels/${channelKey}`).push(message);
  }
  async sendMessage(message: Message){
    await this._aDatabase.list('/messages').push(message);
  }
  getChats(userToId: string){
    return this._aAuth.getAuthenticatedUser()
        .map(auth => auth.uid)
        .mergeMap(uid => this._aDatabase.list(`/user-messages/${uid}/${userToId}`))
        .mergeMap(chats => {
          return Observable.forkJoin(
              chats.map(chat => this._aDatabase.object(`/messages/${chat.$key}`)
                  .first()),
              (...vals: Message[]) => {
                  return vals;
              }
          )
        })
  }
}

