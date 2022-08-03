import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateClientPageRoutingModule } from './date-client-routing.module';

import { DateClientPage } from './date-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    DateClientPageRoutingModule
  ],
  declarations: [DateClientPage]
})
export class DateClientPageModule {}
