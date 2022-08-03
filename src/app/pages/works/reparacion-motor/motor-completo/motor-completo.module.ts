import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotorCompletoPageRoutingModule } from './motor-completo-routing.module';

import { MotorCompletoPage } from './motor-completo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotorCompletoPageRoutingModule
  ],
  declarations: [MotorCompletoPage]
})
export class MotorCompletoPageModule {}
