import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetPlatilloDetailsPage } from './get-platillo-details.page';

const routes: Routes = [
  {
    path: '',
    component: GetPlatilloDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetPlatilloDetailsPageRoutingModule {}
