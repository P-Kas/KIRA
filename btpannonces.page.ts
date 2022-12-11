import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Storage } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { doc, Firestore} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

@Component({
  selector: 'app-btpannonces',
  templateUrl: './btpannonces.page.html',
  styleUrls: ['./btpannonces.page.scss'],
})
export class BTPAnnoncesPage implements OnInit {
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
    this.items = this.firestore.collection('BTP').valueChanges();
    //this.items = this.afSG.ref('BTP').getDownloadURL();
}


  ngOnInit() {
  }

  getImagesStorage(image: any) {
    this.afSG.ref('BTP').getDownloadURL().subscribe(imgUrl => {
      console.log(imgUrl);
      this.images.push({
        name: image.payload.exportVal().name,
        url: imgUrl
      });
    });
  }


}


