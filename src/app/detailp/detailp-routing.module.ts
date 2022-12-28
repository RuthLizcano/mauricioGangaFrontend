import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailpPage } from './detailp.page';

const routes: Routes = [
  {
    path: '',
    component: DetailpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailpPageRoutingModule {}
