import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleAjoutPage } from './ele-ajout.page';

const routes: Routes = [
  {
    path: '',
    component: EleAjoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleAjoutPageRoutingModule {}
