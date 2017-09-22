import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {LoginResponse} from "../../models/login/login-response.interface";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private navCtrl: NavController, private loading: LoadingController,
              private toast: ToastController) {
  }
  register(event: LoginResponse){
    
    const loading = this.loading.create({
      content: "Please wait..."
    });
    loading.present();
    if(!event.error){
        loading.dismiss();
      this.navCtrl.setRoot('EditProfilePage');
    }else{
      loading.dismiss();
        this.toast.create({
          message: "Sorry! Registration unsuccessful.",
          duration: 3000
        }).present();
    }
  }

}
