import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import {ComponentsModule} from "../../components/components.modules";
import { AngularFireAuthModule} from 'angularfire2/auth'

@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
      ComponentsModule,
      AngularFireAuthModule
  ],
  exports: [
    RegisterPage
  ]
})
export class RegisterPageModule {}
