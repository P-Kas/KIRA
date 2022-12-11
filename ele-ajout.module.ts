import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleAjoutPageRoutingModule } from './ele-ajout-routing.module';

import { EleAjoutPage } from './ele-ajout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleAjoutPageRoutingModule
  ],
  declarations: [EleAjoutPage]
})
export class EleAjoutPageModule {}
