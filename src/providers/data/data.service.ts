import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import {User} from 'firebase/app';
import {UserProfile} from "../../models/user-profile/user.interface";
import 'rxjs/add/operator/take';
@Injectable()
export class DataServiceProvider {

  profileObject: FirebaseObjectObservable<UserProfile>;
  profileList: FirebaseListObservable<UserProfile>;
  constructor(private _aDatabase: AngularFireDatabase) {}

  searchUser(firstName: string){
      const query = this._aDatabase.list('/profiles', {
        query: {
          orderByChild: 'firstName',
          equalTo: firstName
        }
      });
      return query.take(1);
  }

  getProfile(user: User){
    this.profileObject = this._aDatabase.object(`/profiles/${user.uid}`, {preserveSnapshot: true});
    /* this preserve ni juu
    this still ita return something even if profile of his particular user is not set. so iyi snapshot itatusaidia ku control
    what is been returned
    */
    return this.profileObject.take(1);
  }

  async saveProfile(user: User, profile: UserProfile){

    this.profileObject = this._aDatabase.object(`/profiles/${user.uid}`);
    try{
      await this.profileObject.set(profile);
      return true;
       }
    catch(e){
      console.log(e);
      return false;
    }
  }

}
