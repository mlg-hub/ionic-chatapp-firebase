import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ChannelListComponent } from './channel-list';

@NgModule({
  declarations: [
    ChannelListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ChannelListComponent
  ]
})
export class ChannelListComponentModule {}
