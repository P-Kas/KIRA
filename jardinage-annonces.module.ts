import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JardinageAnnoncesPageRoutingModule } from './jardinage-annonces-routing.module';

import { JardinageAnnoncesPage } from './jardinage-annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JardinageAnnoncesPageRoutingModule
  ],
  declarations: [JardinageAnnoncesPage]
})
export class JardinageAnnoncesPageModule {}
