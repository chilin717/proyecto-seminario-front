import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FallasMotorPageRoutingModule } from './fallas-motor-routing.module';

import { FallasMotorPage } from './fallas-motor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FallasMotorPageRoutingModule
  ],
  declarations: [FallasMotorPage]
})
export class FallasMotorPageModule {}
