import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoslojaPageRoutingModule } from './pedidosloja-routing.module';

import { PedidoslojaPage } from './pedidosloja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoslojaPageRoutingModule
  ],
  declarations: [PedidoslojaPage]
})
export class PedidoslojaPageModule {}
