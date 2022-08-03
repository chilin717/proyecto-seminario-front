import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateClientPage } from './date-client.page';

const routes: Routes = [
  {
    path: '',
    component: DateClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateClientPageRoutingModule {}
