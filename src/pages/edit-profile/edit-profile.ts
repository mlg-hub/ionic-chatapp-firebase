import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProfile} from "../../models/user-profile/user.interface";

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  profile = {} as UserProfile;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.profile = this.navParams.get('existingProfile');
  }
  saveResult(event: Boolean){
    event ? this.navCtrl.setRoot('TabsPage') : console.log('not authenticated or saved');
  }

}
