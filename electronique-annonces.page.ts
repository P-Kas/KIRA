import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-electronique-annonces',
  templateUrl: './electronique-annonces.page.html',
  styleUrls: ['./electronique-annonces.page.scss'],
})
export class ElectroniqueAnnoncesPage implements OnInit {
  images = [];
items: Observable<any[]>;
firebaseData = {
  text: '',
  image:''
};

  photoService: any;
    constructor(
      public firestore: AngularFirestore,
      public afSG: AngularFireStorage
      ){
      this.items = this.firestore.collection('Electronique').valueChanges();
      //this.items = this.afSG.ref('Electronique').getDownloadURL();
  }


  ngOnInit() {
  }
  addFirebase(){
    this.firestore.collection('Electronique').add(this.firebaseData);
    this.firebaseData ={
      text: '',
      image:''
    };
  }
  getImagesStorage(image: any) {
    this.afSG.ref('Electronique').getDownloadURL().subscribe(imgUrl => {
      console.log(imgUrl);
      this.images.push({
        name: image.payload.exportVal().name,
        url: imgUrl
      });
    });
  }
}
