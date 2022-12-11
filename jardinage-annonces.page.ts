import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-jardinage-annonces',
  templateUrl: './jardinage-annonces.page.html',
  styleUrls: ['./jardinage-annonces.page.scss'],
})
export class JardinageAnnoncesPage implements OnInit {
  images = [];
  items: Observable<any[]>;
  firebaseData = {
    text: '',
    image:''
  };
  photoService: any;
    constructor(
      public firestore: AngularFirestore,
      public afSG: AngularFireStorage) {
      this.items = this.firestore.collection('Jardinage').valueChanges();
  }


    ngOnInit() {
    }
    addFirebase(){
      this.firestore.collection('Jardinage').add(this.firebaseData);
      this.firebaseData ={
        text: '',
        image:''
      };
    }
    getImagesStorage(image: any) {
      this.afSG.ref('Jardinage').getDownloadURL().subscribe(imgUrl => {
        console.log(imgUrl);
        this.images.push({
          name: image.payload.exportVal().name,
          url: imgUrl
        });
      });
    }



}
