import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AuthServiceProvider} from "../providers/auth-service/auth-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private _Auth: AuthServiceProvider) {

    // this._Auth.getAuthenticatedUser().subscribe( auth =>  {
    //   !auth ? this.rootPage = 'LoginPage' : this.rootPage = 'TabsPage';
    // });
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.rootPage = 'LoginPage';
    });
  }
}

