import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetPlatillosPageRoutingModule } from './get-platillos-routing.module';

import { GetPlatillosPage } from './get-platillos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetPlatillosPageRoutingModule
  ],
  declarations: [GetPlatillosPage]
})
export class GetPlatillosPageModule {}
