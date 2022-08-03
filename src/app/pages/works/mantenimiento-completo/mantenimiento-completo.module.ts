import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MantenimientoCompletoPageRoutingModule } from './mantenimiento-completo-routing.module';

import { MantenimientoCompletoPage } from './mantenimiento-completo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MantenimientoCompletoPageRoutingModule
  ],
  declarations: [MantenimientoCompletoPage]
})
export class MantenimientoCompletoPageModule {}
