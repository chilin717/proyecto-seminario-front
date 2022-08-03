import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorksPageRoutingModule } from './works-routing.module';
import { WorksPage } from './works.page';
import { MantenimientoCompletoPageRoutingModule } from './mantenimiento-completo/mantenimiento-completo-routing.module';
import { FallasMotorPageRoutingModule } from './fallas-motor/fallas-motor-routing.module';
import { MantenimientoPreventivoPageRoutingModule } from './mantenimiento-preventivo/mantenimiento-preventivo-routing.module';
import { ReparacionMotorPageRoutingModule } from './reparacion-motor/reparacion-motor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorksPageRoutingModule,
    FallasMotorPageRoutingModule,
    MantenimientoCompletoPageRoutingModule,
    MantenimientoPreventivoPageRoutingModule,
    ReparacionMotorPageRoutingModule,
  ],
  declarations: [WorksPage]
})
export class WorksPageModule {}
