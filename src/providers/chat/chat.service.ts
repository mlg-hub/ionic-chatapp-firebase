import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class ChatServiceProvider {

  constructor(private _aDatabase: AngularFireDatabase) {
  }

  addChannel(channelName: string){
    this._aDatabase.list(`/channels-name/`).push({name: channelName});
  }

}
