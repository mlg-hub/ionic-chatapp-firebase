import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InboxPage } from './inbox';
import {ComponentsModule} from "../../components/components.modules";

@NgModule({
  declarations: [
    InboxPage,
  ],
  imports: [
    IonicPageModule.forChild(InboxPage),
      ComponentsModule
  ],
  exports: [
    InboxPage
  ]
})
export class InboxPageModule {}
