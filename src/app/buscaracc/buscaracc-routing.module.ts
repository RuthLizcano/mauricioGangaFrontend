import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscaraccPage } from './buscaracc.page';

const routes: Routes = [
  {
    path: '',
    component: BuscaraccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscaraccPageRoutingModule {}
