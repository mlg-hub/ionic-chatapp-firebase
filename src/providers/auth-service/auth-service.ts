import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/accounts/account.interface';
import {LoginResponse} from "../../models/login/login-response.interface";

@Injectable()
export class AuthServiceProvider {

  constructor(private _aAuth: AngularFireAuth) {}

  getAuthenticatedUser(){
    return this._aAuth.authState;
  }
  
  logOutUser(){
    this._aAuth.auth.signOut();
  }

  async signIn(account: Account){
    try {
        return <LoginResponse> {
          result: await this._aAuth.auth.signInWithEmailAndPassword(account.email, account.password)
        }
    }catch (e){
      return <LoginResponse> {
        error: e
      }
    }
  }
  
  async register(account: Account){
    try{
      return <LoginResponse> {
        result: await this._aAuth.auth.createUserWithEmailAndPassword(account.email, account.password)
      }
    }catch (e){
      return <LoginResponse> {
        error: e
      }
    }
  }
}
