import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JardAoutPage } from './jard-aout.page';

const routes: Routes = [
  {
    path: '',
    component: JardAoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JardAoutPageRoutingModule {}
