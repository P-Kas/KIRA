import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JardinageAnnoncesPage } from './jardinage-annonces.page';

const routes: Routes = [
  {
    path: '',
    component: JardinageAnnoncesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JardinageAnnoncesPageRoutingModule {}
