import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorksPage } from './works.page';

const routes: Routes = [
  {
    path: '',
    component: WorksPage
  },
  {
    path: 'mantenimiento-completo',
    loadChildren: () => import('./mantenimiento-completo/mantenimiento-completo.module').then( m => m.MantenimientoCompletoPageModule)
  },
  {
    path: 'mantenimiento-preventivo',
    loadChildren: () => import('./mantenimiento-preventivo/mantenimiento-preventivo.module').then( m => m.MantenimientoPreventivoPageModule)
  },
  {
    path: 'fallas-motor',
    loadChildren: () => import('./fallas-motor/fallas-motor.module').then( m => m.FallasMotorPageModule)
  },
  {
    path: 'reparacion-motor',
    loadChildren: () => import('./reparacion-motor/reparacion-motor.module').then( m => m.ReparacionMotorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksPageRoutingModule {}
