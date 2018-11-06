import { NgModule } from '@angular/core';
import { CarreteComponent } from './carrete/carrete.component';
import { RouterModule, Routes } from '@angular/router';


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
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
