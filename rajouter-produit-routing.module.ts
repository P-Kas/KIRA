import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RajouterProduitPage } from './rajouter-produit.page';

const routes: Routes = [
  {
    path: '',
    component: RajouterProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RajouterProduitPageRoutingModule {}
