import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InclojaPageRoutingModule } from './incloja-routing.module';

import { InclojaPage } from './incloja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InclojaPageRoutingModule
  ],
  declarations: [InclojaPage]
})
export class InclojaPageModule {}
