import { Component, EventEmitter, Output } from '@angular/core';
import {NavController} from "ionic-angular/index";
import {Account} from '../../models/accounts/account.interface';
import {LoginResponse} from "../../models/login/login-response.interface";
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

@Component({
  selector: 'login-form-component',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {
  account = {} as Account;
  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor( private navCtrl: NavController,
              private _authService: AuthServiceProvider) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }
  

  async login(){

    const loginResponse = await this._authService.signIn(this.account);
    this.loginStatus.emit(loginResponse);
    // try {
    //   const login: LoginResponse = {
    //     result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
    //   }
    //
    // }catch(e) {
    //   console.error(e);
    //   const error: LoginResponse = {
    //     error: e
    //   }
    //     this.loginStatus.emit(error);
    // }
  }

  navigateToRegisterPage(){
   this.navCtrl.push('RegisterPage');
  }

}
