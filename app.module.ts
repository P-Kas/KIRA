
import{NgModule}from'@angular/core';
import{BrowserModule}from'@angular/platform-browser';
import{RouteReuseStrategy}from'@angular/router';
import{HttpClientModule} from '@angular/common/http';
import{SplashScreen } from '@ionic-native/splash-screen/ngx';
import{StatusBar } from '@ionic-native/status-bar/ngx';
import{File } from '@ionic-native/File/ngx';
import{FilePath } from '@awesome-cordova-plugins/file-path/ngx';
import{AngularFireStorageModule } from '@angular/fire/compat/storage';
import{IonicModule,IonicRouteStrategy}from'@ionic/angular';
import{AppComponent}from'./app.component';
import{AppRoutingModule}from'./app-routing.module';
import{AngularFireModule}from'@angular/fire/compat';
import{AngularFirestoreModule}from'@angular/fire/compat/firestore';
import{Camera} from '@ionic-native/camera/ngx';
import{ provideStorage, getStorage } from '@angular/fire/storage';
import{ provideFirestore, getFirestore } from '@angular/fire/firestore';
import{ provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { Router } from '@angular/router';




const firebaseConfig = {
  apiKey: 'AIzaSyBkb1zvbclhrlIV9jyCvXJ-lu6K1IYf0vk',
  authDomain: 'kira-2-e7e6b.firebaseapp.com',
  databaseURL: 'https://kira-2-e7e6b-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'kira-2-e7e6b',
  storageBucket: 'kira-2-e7e6b.appspot.com',
  messagingSenderId: '879363293555',
  appId: '1:879363293555:web:ba06487351b0e02e9a8506',
  measurementId: 'G-4FEPVBPVEZ'
};



@NgModule({
declarations:[AppComponent],
imports:[
BrowserModule,
IonicModule.forRoot(),
AppRoutingModule,
AngularFireModule.initializeApp(firebaseConfig),// imports firebase/app needed for everything
provideFirebaseApp(() => initializeApp(environment.firebase)),
AngularFirestoreModule,
AngularFireStorageModule,
HttpClientModule,
provideAuth(() => getAuth()),
		provideFirestore(() => getFirestore()),
		provideStorage(() => getStorage())

],

providers: [
  SplashScreen,
  StatusBar,
  Camera,
  File,
  FilePath,
  {provide: FIREBASE_OPTIONS, useValue: environment.firebase},
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
],
bootstrap:[AppComponent],

})
export class AppModule {}

