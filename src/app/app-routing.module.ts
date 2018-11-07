import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {CarreteComponent} from './carrete/carrete.component';
import {CarouselComponent} from './carousel-jorge/carousel.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/carrete',
    pathMatch: 'full'
  },
  {
    path: 'carrete',
    component: CarreteComponent
  },
  {
    path: 'jorge',
    component: CarouselComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
  ]


})
export class AppRoutingModule { }
