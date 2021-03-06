import { Component, OnDestroy, Output, EventEmitter, Input, OnInit } from '@angular/core';
import {UserProfile} from "../../models/user-profile/user.interface";
import {DataServiceProvider} from "../../providers/data/data.service";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {Subscription} from 'rxjs/Subscription';
import {User} from 'firebase/app';

@Component({
  selector: 'edit-profile-form-component',
  templateUrl: 'edit-profile-form.component.html'
})
export class EditProfileFormComponent implements OnDestroy, OnInit {
  @Input() profile: UserProfile;
  @Output() saveProfileResult: EventEmitter<Boolean>;
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  
  constructor(private _data: DataServiceProvider, private _auth: AuthServiceProvider) {

    this.saveProfileResult = new EventEmitter<Boolean>();

    this.authenticatedUser$ = this._auth.getAuthenticatedUser().subscribe( (user: User) => {
      this.authenticatedUser = user;
    })
  }
  ngOnInit(){
    if(!this.profile){
      this.profile = {} as UserProfile;
    }
  }
  async saveProfile(){
    if(this.authenticatedUser){
      this.profile.email = this.authenticatedUser.email;
      const result = await this._data.saveProfile(this.authenticatedUser, this.profile);
       this.saveProfileResult.emit(result);
    }
  }
  ngOnDestroy(): void {
  this.authenticatedUser$.unsubscribe();
}

}
