import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableClientPage } from './table-client.page';

const routes: Routes = [
  {
    path: '',
    component: TableClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableClientPageRoutingModule {}
