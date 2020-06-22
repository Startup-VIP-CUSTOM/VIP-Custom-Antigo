import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LojaClientePage } from './loja-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: LojaClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LojaClientePageRoutingModule {}
