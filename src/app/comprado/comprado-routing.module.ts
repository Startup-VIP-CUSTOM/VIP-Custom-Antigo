import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompradoPage } from './comprado.page';

const routes: Routes = [
  {
    path: '',
    component: CompradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompradoPageRoutingModule {}
