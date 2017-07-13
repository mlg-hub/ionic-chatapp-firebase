import { Component, OnInit } from '@angular/core';
import { ChatServiceProvider } from "../../providers/chat/chat.service";
import { Message } from "../../models/messages/msg.interface";
import { Observable } from "rxjs/Observable";
import { NavController } from "ionic-angular";

/**
 * Generated class for the LastMessageListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'last-message-list-component',
  templateUrl: 'last-message-list.html'
})
export class LastMessageListComponent implements OnInit {
  
  messageList$: Observable <Message[]>;

  constructor(private _chatService: ChatServiceProvider, private navCtrl: NavController) {

  }
  ngOnInit() {
    this.messageList$ = this._chatService.getLastMessagesForUser() 
    console.log(this.messageList$);
  }

 navigateToMessage(message: Message){
   
    console.log(message);

    const selectedProfile = {

      $key: message.userToId,
      firstName: message.userToProfile.firstName,
      lastName: message.userToProfile.lastName
    }
    this.navCtrl.push('MessagePage', {selectedUser: selectedProfile});
  }

}
