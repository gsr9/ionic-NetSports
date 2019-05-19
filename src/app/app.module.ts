import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';

import { OptbusquedaComponent } from 'src/app/components/optbusqueda/optbusqueda.component';

  // Your web app's Firebase configuration
  export const firebaseConfig = {
    apiKey: "AIzaSyARw1xEM6-NtU5yWhPtxzu3eIquNIKIPE8",
    authDomain: "netsports-f79aa.firebaseapp.com",
    databaseURL: "https://netsports-f79aa.firebaseio.com",
    projectId: "netsports-f79aa",
    storageBucket: "netsports-f79aa.appspot.com",
    messagingSenderId: "809162868966",
    appId: "1:809162868966:web:73b6a9c0606672c8"
  };

@NgModule({
  declarations: [AppComponent, OptbusquedaComponent],
  entryComponents: [OptbusquedaComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
