import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {
 credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
    ) { }

get email(){
  return this.credentials.get('email');
}
get password(){
  return this.credentials.get('password');
}
  ngOnInit() {
    this.credentials = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


async register(){
  const loading = await this.loadingController.create();
  await loading.present();

  const user = await this.authService.register(this.credentials.value);
  await loading.dismiss();

  if (user){
    this.router.navigateByUrl('/profile', { replaceUrl:true});
  }else{
    this.showAlert('Connexion échouée', 'Re-essayez!');
  }
  }
  async login(){
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();

    if (user){
      this.router.navigateByUrl('/profile', {replaceUrl: true});
    }else{
      this.showAlert('Connexion échouée', 'Re-essayez!');
    }
    }
    async showAlert(header, message) {
      const alert = await this.alertController.create({
        header,
        message,
        buttons: ['OK']
      });
      await alert.present();
    }
  }



