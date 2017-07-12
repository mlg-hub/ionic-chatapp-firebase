import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import {User} from 'firebase/app';
import {UserProfile} from "../../models/user-profile/user.interface";
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {AuthServiceProvider} from "../auth-service/auth-service";
import {database} from 'firebase';
@Injectable()
export class DataServiceProvider {

  profileObject: FirebaseObjectObservable<UserProfile>;
  profileList: FirebaseListObservable<UserProfile>;
  constructor(private _aDatabase: AngularFireDatabase, private _aAuth: AuthServiceProvider) {}

  searchUser(firstName: string){
      const query = this._aDatabase.list('/profiles', {
        query: {
          orderByChild: 'firstName',
          equalTo: firstName
        }
      });
      return query.take(1);
  }
  getAuthUserProfile(){
    return this._aAuth.getAuthenticatedUser()
        .map(user => user.uid)
        .mergeMap(authId => this._aDatabase.object(`/profiles/${authId}`))
        .take(1)
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

  setUserOnline(profile: UserProfile){
    const ref = database().ref(`online-users/${profile.$key}`);
    /*this is the ref to the database we use the firebase SDK not angularfire*/
    try{
      ref.update({...profile});
      ref.onDisconnect().remove();
    }catch (e){
        console.error(e);
    }
  }

  getOnlineUsers(): FirebaseListObservable<UserProfile[]>{
    return this._aDatabase.list(`online-users`);
  }

}
