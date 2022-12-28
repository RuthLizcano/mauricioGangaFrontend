import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscartecPage } from './buscartec.page';

const routes: Routes = [
  {
    path: '',
    component: BuscartecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscartecPageRoutingModule {}
