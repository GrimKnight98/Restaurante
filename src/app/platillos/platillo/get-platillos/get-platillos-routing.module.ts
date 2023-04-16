import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetPlatillosPage } from './get-platillos.page';

const routes: Routes = [
  {
    path: '',
    component: GetPlatillosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetPlatillosPageRoutingModule {}
