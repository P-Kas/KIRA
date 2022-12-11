import { Component, OnInit } from '@angular/core';
import { doc, Firestore} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.page.html',
  styleUrls: ['./mes.page.scss'],
})
export class MesPage implements OnInit {

  images = [];
  items: Observable<any[]>;
  firebaseData = {
    text: '',
    image:''
  };
  photoService: any;

    constructor(
      private firestore: AngularFirestore,
      private afSG: AngularFireStorage) {
      this.items = this.firestore.collection('BTP').valueChanges();
      this.items = this.firestore.collection('Jardinage').valueChanges();
      this.items = this.firestore.collection('Electronique').valueChanges();
      //this.items = this.afSG.ref('BTP').getDownloadURL();
  }


    ngOnInit() {
    }

    /*getImagesStorage(image: any) {
      this.afSG.ref('BTP').getDownloadURL().subscribe(imgUrl => {
        console.log(imgUrl);
        this.images.push({
          name: image.payload.exportVal().name,
          url: imgUrl
        });
      });
    }*/

}
