import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Message} from "../../models/messages/msg.interface";
import {UserProfile} from "../../models/user-profile/user.interface";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {DataServiceProvider} from "../../providers/data/data.service";
import {ChatServiceProvider} from "../../providers/chat/chat.service";
import {Observable} from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  selectedProfile: UserProfile;
  messageList: Observable<Message[]>;
  userId: string;
  userProfile: UserProfile;
  constructor(public navCtrl: NavController, public navParams: NavParams,
            private _aAuth: AuthServiceProvider, private _aData: DataServiceProvider,
            private _chatService: ChatServiceProvider) {
  }

  ionViewWillLoad(){
    this.selectedProfile = this.navParams.get('selectedUser');
    // this._aAuth.getAuthenticatedUser().subscribe(auth => {
    //   this.userId = auth.uid;
    // });
    this._aData.getAuthUserProfile().subscribe(profile => {
      this.userProfile = profile;
      this.userId = profile.$key;
    })

    this.messageList = this._chatService.getChats(this.selectedProfile.$key);
  }
  async sendMessage(content: string){
    try{
      const message: Message = {
        userToId: this.selectedProfile.$key,
        userToProfile: {
          firstName: this.selectedProfile.firstName,
          lastName: this.selectedProfile.lastName
        },
        userFromId: this.userId,
        userFromProfile:{
          firstName: this.userProfile.firstName,
          lastName: this.userProfile.lastName
        },
        content: content
      };
      await this._chatService.sendMessage(message);
    }catch (e){
      console.error(e);
    }
  }
  

}
