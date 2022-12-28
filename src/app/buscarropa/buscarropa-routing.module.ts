import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarropaPage } from './buscarropa.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarropaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarropaPageRoutingModule {}
