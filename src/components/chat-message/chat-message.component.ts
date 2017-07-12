import { Component, Input } from '@angular/core';
import {Message} from "../../models/messages/msg.interface";

@Component({
  selector: 'chat-message-component',
  templateUrl: 'chat-message.component.html'
})
export class ChatMessageComponent {


@Input() chatMessage: Message;
 @Input() userId: string;
  constructor() {
  }

}
