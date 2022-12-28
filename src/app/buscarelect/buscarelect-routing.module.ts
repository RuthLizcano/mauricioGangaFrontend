import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarelectPage } from './buscarelect.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarelectPageRoutingModule {}
