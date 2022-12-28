import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'detailp',
    loadChildren: () => import('./detailp/detailp.module').then( m => m.DetailpPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'tab6',
    loadChildren: () => import('./tab6/tab6.module').then( m => m.Tab6PageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'detailt',
    loadChildren: () => import('./detailt/detailt.module').then( m => m.DetailtPageModule)
  },
  {
    path: 'detailc',
    loadChildren: () => import('./detailc/detailc.module').then( m => m.DetailcPageModule)
  },
  {
    path: 'buscaracc',
    loadChildren: () => import('./buscaracc/buscaracc.module').then( m => m.BuscaraccPageModule)
  },
  {
    path: 'buscarropa',
    loadChildren: () => import('./buscarropa/buscarropa.module').then( m => m.BuscarropaPageModule)
  },
  {
    path: 'buscarelect',
    loadChildren: () => import('./buscarelect/buscarelect.module').then( m => m.BuscarelectPageModule)
  },
  {
    path: 'buscartec',
    loadChildren: () => import('./buscartec/buscartec.module').then( m => m.BuscartecPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
