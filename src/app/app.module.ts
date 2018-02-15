import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RestapiService } from '../providers/restapi-service/restapi-service';
import { SplashScreen } from '@ionic-native/splash-screen';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage

  ],
  imports: [
    IonicModule.forRoot(MyApp),BrowserModule,HttpClientModule,HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage

  ],
  providers: [StatusBar,SplashScreen,{provide: ErrorHandler, useClass: IonicErrorHandler}, RestapiService]
})
export class AppModule {}