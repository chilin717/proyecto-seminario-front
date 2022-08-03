import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotorCompletoPage } from './motor-completo.page';

const routes: Routes = [
  {
    path: '',
    component: MotorCompletoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotorCompletoPageRoutingModule {}
