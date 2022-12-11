import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JardAoutPageRoutingModule } from './jard-aout-routing.module';

import { JardAoutPage } from './jard-aout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JardAoutPageRoutingModule
  ],
  declarations: [JardAoutPage]
})
export class JardAoutPageModule {}
