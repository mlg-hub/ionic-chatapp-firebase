import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { MyApp } from './app.component';
import {FIREBASE_CONFIG} from "./app.firebase.config";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { DataServiceProvider } from '../providers/data/data.service';
import { ChatServiceProvider } from '../providers/chat/chat.service';

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
      FormsModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    DataServiceProvider,
    ChatServiceProvider
  ]
})
export class AppModule {}
