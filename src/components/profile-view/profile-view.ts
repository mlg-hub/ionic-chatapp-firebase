import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataServiceProvider} from "../../providers/data/data.service";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {UserProfile} from "../../models/user-profile/user.interface";
import {User} from "firebase/app";
import {LoadingController, Loading} from "ionic-angular/index";

@Component({
  selector: 'profile-view-component',
  templateUrl: 'profile-view.html'
})
export class ProfileViewComponent implements OnInit{

  public userProfile: UserProfile;
  private loader: Loading;
  @Output() existingProfile: EventEmitter<UserProfile>;

  constructor(private _adata: DataServiceProvider, private _authService: AuthServiceProvider,
              private loading: LoadingController) {
    this.existingProfile = new EventEmitter<UserProfile>()
    this.loader = this.loading.create({
      content: 'processing...'
    })
  }

  ngOnInit():void {
    this.loader.present();
    this._adata.getAuthUserProfile().subscribe(profile => {
      this.userProfile = <UserProfile>profile;
      this.existingProfile.emit(this.userProfile);
      this.loader.dismiss();
    })
    // this._authService.getAuthenticatedUser().subscribe((user : User) => {
    //   this._adata.getProfile(user).subscribe((profile) => {
    //     this.userProfile = <UserProfile>profile.val();
    //     this.existingProfile.emit(this.userProfile);
    //     this.loader.dismiss();
    //   })
    // })
  }

}
