import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FallasMotorPage } from './fallas-motor.page';

const routes: Routes = [
  {
    path: '',
    component: FallasMotorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FallasMotorPageRoutingModule {}
