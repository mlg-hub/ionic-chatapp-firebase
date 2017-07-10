import { Component } from '@angular/core';

/**
 * Generated class for the ChannelListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'channel-list',
  templateUrl: 'channel-list.html'
})
export class ChannelListComponent {

  text: string;

  constructor() {
    console.log('Hello ChannelListComponent Component');
    this.text = 'Hello World';
  }

}
