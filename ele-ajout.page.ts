import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { PhotoService} from '../services/photo.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
}

@Component({
  selector: 'app-ele-ajout',
  templateUrl: './ele-ajout.page.html',
  styleUrls: ['./ele-ajout.page.scss'],
})
export class EleAjoutPage implements OnInit {
  items: Observable<any[]>;
  firebaseData ={
    text: '',
    date: '',
    description: '',
    marque: '',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Misengarde: '',
    // eslint-disable-next-line id-blacklist
    number: '',
    image:''
  };
  imagePath: string;
  upload: any;
  imgURL: any;

  constructor(
    public firestore: AngularFirestore,
    public storageModule: AngularFireStorage,
    public photoService: PhotoService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public actionSheetController: ActionSheetController,
    ){this.items = firestore.collection('Electronique').valueChanges();}

    async addFirebase(){

      console.log(this.firebaseData);
      this.firestore.collection('Electronique').add(this.firebaseData);
      /*
      this.firebaseData ={
        text: '',
        date: '',
        description: '',
        marque: '',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Misengarde: '',
        // eslint-disable-next-line id-blacklist
        number: '',
        image:''
        };
        */
    }

    async addPhotoToGallery() {

      await Camera.getPhoto({
       resultType: CameraResultType.Uri, // file-based data; provides best performance
       source: CameraSource.Camera, // automatically take a new photo with the camera
       quality: 100, // highest quality (0 to 100)
     }).then(async (photo)=> {
       this.imgURL = await fetch(photo.webPath);
       console.log(this.imgURL);
       const blob = await this.imgURL.blob();
       console.log(blob);
       const filePath = await `Electronique/${this.imageName()}`;
       this.firebaseData.image = await this.uploadImage(filePath, blob);
       setTimeout(() => {
console.log(this.firebaseData.image );
       }, 2000);
     });
     /*
     this.photoService.addNewToGallery().then(
       async (photo) =>{
         console.log(photo);
         //this.imgURL = await fetch(photo);
       }
     );
     const imgData = await fetch(this.imgURL);
     console.log(imgData);
const blob = await imgData.blob();
const filePath = `BTP/${this.imageName()}`;
this.imgURL = await this.uploadImage(filePath, blob);
*/
}
uploadImage(filePath: string,file: any  ){
  return this.storageModule.upload(filePath, file).then((res) => res.ref.getDownloadURL());
}

imageName() {
const newTime = Math.floor(Date.now() / 1000);
return Math.floor(Math.random() * 20) + newTime;
}
async addImage(details: any){
  details.imgURL = this.imgURL;
  const loading = await this.loadingController.create();
await loading.present();

}

public async showActionSheet(photo: UserPhoto, position: number) {
  const actionSheet = await this.actionSheetController.create({
    header: 'Photos',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        this.photoService.deletePicture(photo, position);
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        // Nothing to do, action sheet is automatically closed
        }
    }]
  });
  await actionSheet.present();
}





















    async ngOnInit() {
      await this.photoService.loadSaved();
    }




}

