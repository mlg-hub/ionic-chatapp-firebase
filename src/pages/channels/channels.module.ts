import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelsPage } from './channels';
import {ComponentsModule} from "../../components/components.modules";

@NgModule({
  declarations: [
    ChannelsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChannelsPage),
      ComponentsModule
  ],
  exports: [
    ChannelsPage
  ]
})
export class ChannelsPageModule {}
