import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CabezaFuerzaPageRoutingModule } from './cabeza-fuerza-routing.module';

import { CabezaFuerzaPage } from './cabeza-fuerza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CabezaFuerzaPageRoutingModule
  ],
  declarations: [CabezaFuerzaPage]
})
export class CabezaFuerzaPageModule {}
