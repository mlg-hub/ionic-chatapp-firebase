import { Component, Output, EventEmitter } from '@angular/core';
import {Account} from '../../models/accounts/account.interface';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {LoginResponse} from "../../models/login/login-response.interface";
@Component({
  selector: 'register-form-component',
  templateUrl: 'register-form.component.html'
})
export class RegisterFormComponent {

  account = {} as Account;
  @Output() registerStatus: EventEmitter <LoginResponse>;
  constructor(private _authService: AuthServiceProvider) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register(){
    try {
      const register = await
          this._authService.register( this.account);
           this.registerStatus.emit(register);
    } catch(e){
        console.log(e);
        this.registerStatus.emit(e);
    }

  }

}
