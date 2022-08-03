import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'date-client',
    loadChildren: () => import('./pages/date-client/date-client.module').then( m => m.DateClientPageModule)
  },
  {
    path: 'date-moto',
    loadChildren: () => import('./pages/date-moto/date-moto.module').then( m => m.DateMotoPageModule)
  },
  {
    path: 'works',
    loadChildren: () => import('./pages/works/works.module').then( m => m.WorksPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
