import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableClientPageRoutingModule } from './table-client-routing.module';

import { TableClientPage } from './table-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableClientPageRoutingModule
  ],
  declarations: [TableClientPage]
})
export class TableClientPageModule {}
