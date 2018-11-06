import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarreteComponent } from './carrete/carrete.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/carrete',
    pathMatch: 'full'
  },
  {
    path: 'carrete',
    component: CarreteComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
