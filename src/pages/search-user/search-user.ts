import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProfile} from "../../models/user-profile/user.interface";

@IonicPage()
@Component({
  selector: 'page-search-user',
  templateUrl: 'search-user.html',
})
export class SearchUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  navigateToChat(profile: UserProfile){
    this.navCtrl.push('MessagePage',{selectedUser: profile});
  }
}
