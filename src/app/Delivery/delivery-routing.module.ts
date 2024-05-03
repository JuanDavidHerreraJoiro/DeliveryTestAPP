import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './page/delivery/delivery.component';
import { DisplayComponent } from './page/display/display.component';
import { DeliveryDateComponent } from './page/delivery-date/delivery-date.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'direccionentrega', 
    component: DeliveryComponent
  },
  { 
    path: 'fechaentrega', 
    component: DeliveryDateComponent
  },
  { 
    path: 'display', 
    component: DisplayComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
