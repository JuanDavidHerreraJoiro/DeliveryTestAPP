import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './page/delivery/delivery.component';
import { DisplayComponent } from './page/display/display.component';
import { DeliveryDateComponent } from './page/delivery-date/delivery-date.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  exports:[

  ],
  declarations: [
    HomeComponent,
    DeliveryComponent,
    DisplayComponent,
    DeliveryDateComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    MaterialModule,
  ]
})
export class DeliveryModule { }
