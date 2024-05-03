import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Delivery/home/home.component';

const routes: Routes = [
  {
    path:"",
    loadChildren: () => import('./Delivery/delivery.module').then (m => m.DeliveryModule)
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
