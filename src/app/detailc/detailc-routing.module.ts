import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailcPage } from './detailc.page';

const routes: Routes = [
  {
    path: '',
    component: DetailcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailcPageRoutingModule {}
