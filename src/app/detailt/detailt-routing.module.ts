import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailtPage } from './detailt.page';

const routes: Routes = [
  {
    path: '',
    component: DetailtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailtPageRoutingModule {}
