import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController, LoadingController} from 'ionic-angular';
import {LoginResponse} from "../../models/login/login-response.interface";
import {DataServiceProvider} from "../../providers/data/data.service";
import {User} from 'firebase/app';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private toast: ToastController, private _data: DataServiceProvider,
              private navCtrl: NavController,
               private loadingCtrl: LoadingController) {}

  login(event: LoginResponse){
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loading.present();
    if(!event.error){
      loading.dismiss();
      this._data.getProfile(<User>event.result).subscribe((profile) => {
        profile.val() ? this.navCtrl.setRoot('TabsPage') :  this.navCtrl.setRoot('EditProfilePage');
      });
    }else {
      loading.dismiss();
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

}
