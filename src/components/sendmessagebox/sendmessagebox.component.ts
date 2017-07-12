import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sendmessagebox-component',
  templateUrl: 'sendmessagebox.component.html'
})
export class SendmessageboxComponent {
  @Output() sendMessage: EventEmitter<string>;
  content:string;
  constructor() {
    this.sendMessage = new EventEmitter<string>();
  }
  onSubmit(){
    this.sendMessage.emit(this.content);
    this.content = "";
  }

}
