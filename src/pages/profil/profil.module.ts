import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilPage } from './profil';
import {ComponentsModule} from "../../components/components.modules";

@NgModule({
  declarations: [
    ProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilPage),
      ComponentsModule
  ],
  exports: [
    ProfilPage
  ]
})
export class ProfilPageModule {}
