import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateMotoPageRoutingModule } from './date-moto-routing.module';

import { DateMotoPage } from './date-moto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateMotoPageRoutingModule
  ],
  declarations: [DateMotoPage]
})
export class DateMotoPageModule {}
