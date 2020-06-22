import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LucrolojaPageRoutingModule } from './lucroloja-routing.module';

import { LucrolojaPage } from './lucroloja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LucrolojaPageRoutingModule
  ],
  declarations: [LucrolojaPage]
})
export class LucrolojaPageModule {}
