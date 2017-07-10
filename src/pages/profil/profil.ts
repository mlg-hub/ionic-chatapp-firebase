import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {UserProfile} from "../../models/user-profile/user.interface";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  existingProfile: UserProfile;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private _aAuth: AuthServiceProvider, private loading: LoadingController ) {
  }

  getExistingProfile(profile: UserProfile){
      this.existingProfile = profile;
  }
  navigateToEditProfilePage(){
    this.navCtrl.push('EditProfilePage',{existingProfile: this.existingProfile})
  }
  logout(){
    this._aAuth.logOutUser();
    this.loading.create({
      content: 'Please wait...',
      duration: 3000
    }).present();

    setTimeout(() => {
      this.navCtrl.setRoot('LoginPage');
    }, 3000)

  }

}
