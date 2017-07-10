import { Component, Output, EventEmitter } from '@angular/core';
import {DataServiceProvider} from "../../providers/data/data.service";
import {UserProfile} from "../../models/user-profile/user.interface";

@Component({
  selector: 'profile-search-component',
  templateUrl: 'profile-search.html'
})
export class ProfileSearchComponent {

  query: string;
  profileList: UserProfile[];
  @Output() selectedProfile: EventEmitter<UserProfile>;

  constructor(private _aData: DataServiceProvider) {
    this.selectedProfile = new EventEmitter<UserProfile>();
  }

  searchUser(){
    console.log(this.query);
    this._aData.searchUser(this.query).subscribe( profiles => {
      this.profileList = profiles;
    })
  }
  selectedUser(profile:UserProfile){
      this.selectedProfile.emit(profile);
  }


}
