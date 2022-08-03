import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MantenimientoCompletoPage } from './mantenimiento-completo.page';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoCompletoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientoCompletoPageRoutingModule {}
