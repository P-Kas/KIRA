import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RajouterProduitPageRoutingModule } from './rajouter-produit-routing.module';

import { RajouterProduitPage } from './rajouter-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RajouterProduitPageRoutingModule
  ],
  declarations: [RajouterProduitPage]
})
export class RajouterProduitPageModule {}
