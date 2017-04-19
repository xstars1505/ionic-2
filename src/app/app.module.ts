import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {Favorites} from "../pages/favorites/favorites";
import {Library} from "../pages/library/library";
import {QuotePage} from "../pages/quote/quote";
import {Quotes} from "../pages/quotes/quotes";
import {Settings} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {QuotesService} from "../services/quote";
import {SettingsService} from "../services/settings";

@NgModule({
  declarations: [
    MyApp,
    Favorites,
    Library,
    QuotePage,
    Quotes,
    Settings,
    TabsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Favorites,
    Library,
    QuotePage,
    Quotes,
    Settings,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService
  ]
})
export class AppModule {}
