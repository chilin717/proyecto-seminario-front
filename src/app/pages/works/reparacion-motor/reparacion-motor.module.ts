import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReparacionMotorPageRoutingModule } from './reparacion-motor-routing.module';

import { ReparacionMotorPage } from './reparacion-motor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReparacionMotorPageRoutingModule
  ],
  declarations: [ReparacionMotorPage]
})
export class ReparacionMotorPageModule {}
