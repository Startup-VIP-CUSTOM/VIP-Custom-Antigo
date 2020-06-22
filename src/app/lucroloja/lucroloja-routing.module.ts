import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LucrolojaPage } from './lucroloja.page';

const routes: Routes = [
  {
    path: '',
    component: LucrolojaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LucrolojaPageRoutingModule {}
