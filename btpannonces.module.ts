import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BTPAnnoncesPageRoutingModule } from './btpannonces-routing.module';

import { BTPAnnoncesPage } from './btpannonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BTPAnnoncesPageRoutingModule
  ],
  declarations: [BTPAnnoncesPage]
})
export class BTPAnnoncesPageModule {}
