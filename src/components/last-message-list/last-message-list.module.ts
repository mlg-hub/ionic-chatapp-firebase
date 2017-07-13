import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LastMessageListComponent } from './last-message-list';

@NgModule({
  declarations: [
    LastMessageListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    LastMessageListComponent
  ]
})
export class LastMessageListComponentModule {}
