import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProfile} from "../../models/user-profile/user.interface";

/**
 * Generated class for the ProfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  existingProfile: UserProfile;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getExistingProfile(profile: UserProfile){
      this.existingProfile = profile;
  }
  navigateToEditProfilePage(){
    this.navCtrl.push('EditProfilePage',{existingProfile: this.existingProfile})
  }

}
