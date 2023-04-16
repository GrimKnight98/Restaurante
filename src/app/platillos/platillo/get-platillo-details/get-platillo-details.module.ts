import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetPlatilloDetailsPageRoutingModule } from './get-platillo-details-routing.module';

import { GetPlatilloDetailsPage } from './get-platillo-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetPlatilloDetailsPageRoutingModule
  ],
  declarations: [GetPlatilloDetailsPage]
})
export class GetPlatilloDetailsPageModule {}
