import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectroniqueAnnoncesPageRoutingModule } from './electronique-annonces-routing.module';

import { ElectroniqueAnnoncesPage } from './electronique-annonces.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectroniqueAnnoncesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ElectroniqueAnnoncesPage]
})
export class ElectroniqueAnnoncesPageModule {}
