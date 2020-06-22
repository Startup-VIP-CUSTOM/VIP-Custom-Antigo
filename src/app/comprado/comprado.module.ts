import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompradoPageRoutingModule } from './comprado-routing.module';

import { CompradoPage } from './comprado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompradoPageRoutingModule
  ],
  declarations: [CompradoPage]
})
export class CompradoPageModule {}
