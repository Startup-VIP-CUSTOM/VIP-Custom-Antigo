import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscolherlojaPage } from './escolherloja.page';

const routes: Routes = [
  {
    path: '',
    component: EscolherlojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscolherlojaPageRoutingModule {}
