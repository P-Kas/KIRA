import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BTPAnnoncesPage } from './btpannonces.page';

const routes: Routes = [
  {
    path: '',
    component: BTPAnnoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BTPAnnoncesPageRoutingModule {}
