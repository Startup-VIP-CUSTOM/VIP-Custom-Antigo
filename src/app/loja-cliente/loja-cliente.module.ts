import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LojaClientePageRoutingModule } from './loja-cliente-routing.module';

import { LojaClientePage } from './loja-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LojaClientePageRoutingModule
  ],
  declarations: [LojaClientePage]
})
export class LojaClientePageModule {}
