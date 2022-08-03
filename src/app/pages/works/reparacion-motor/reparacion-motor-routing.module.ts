import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReparacionMotorPage } from './reparacion-motor.page';

const routes: Routes = [
  {
    path: '',
    component: ReparacionMotorPage
  },
  {
    path: 'cabeza-fuerza',
    loadChildren: () => import('./cabeza-fuerza/cabeza-fuerza.module').then( m => m.CabezaFuerzaPageModule)
  },
  {
    path: 'motor-completo',
    loadChildren: () => import('./motor-completo/motor-completo.module').then( m => m.MotorCompletoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReparacionMotorPageRoutingModule {}
