import { Component, OnInit } from '@angular/core';
import {DataServiceProvider} from "../../providers/data/data.service";
import {FirebaseListObservable} from "angularfire2/database";
import {UserProfile} from "../../models/user-profile/user.interface";
import {NavController} from "ionic-angular";

@Component({
  selector: 'online-users-component',
  templateUrl: 'online-users.html'
})
export class OnlineUsersComponent implements OnInit{

  onlineUserList: FirebaseListObservable<UserProfile[]>;

  constructor(private _aData: DataServiceProvider, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.setUserOnline();
    this.getOnlineUsers();
  }

  setUserOnline(){
    // Get the authenticated user
    this._aData.getAuthUserProfile().subscribe(profile => {
      //Call to a service that set user online within firebase
      this._aData.setUserOnline(profile);
    });

  }
  
  getOnlineUsers(){
   this.onlineUserList = this._aData.getOnlineUsers();
  }

  openChat(profile: UserProfile){
    this.navCtrl.push('MessagePage', {selectedUser: profile});
  }
}
