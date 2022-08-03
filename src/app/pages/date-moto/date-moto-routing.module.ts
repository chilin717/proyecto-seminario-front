import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateMotoPage } from './date-moto.page';

const routes: Routes = [
  {
    path: '',
    component: DateMotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateMotoPageRoutingModule {}
