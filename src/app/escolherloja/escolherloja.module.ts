import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscolherlojaPageRoutingModule } from './escolherloja-routing.module';

import { EscolherlojaPage } from './escolherloja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscolherlojaPageRoutingModule
  ],
  declarations: [EscolherlojaPage]
})
export class EscolherlojaPageModule {}
