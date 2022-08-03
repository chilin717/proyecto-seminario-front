import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CabezaFuerzaPage } from './cabeza-fuerza.page';

const routes: Routes = [
  {
    path: '',
    component: CabezaFuerzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CabezaFuerzaPageRoutingModule {}
