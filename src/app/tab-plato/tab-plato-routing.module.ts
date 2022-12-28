import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPlatoPage } from './tab-plato.page';

const routes: Routes = [
  {
    path: '',
    component: TabPlatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPlatoPageRoutingModule {}
