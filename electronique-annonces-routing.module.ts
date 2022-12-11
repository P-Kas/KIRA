import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectroniqueAnnoncesPage } from './electronique-annonces.page';

const routes: Routes = [
  {
    path: '',
    component: ElectroniqueAnnoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectroniqueAnnoncesPageRoutingModule {}
