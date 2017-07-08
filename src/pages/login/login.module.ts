import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {ComponentsModule} from "../../components/components.modules";
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
      ComponentsModule
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
