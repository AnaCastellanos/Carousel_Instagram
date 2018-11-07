import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {CarreteComponent} from './carrete/carrete.component';
import {CarouselComponent} from './carousel-jorge/carousel.component';
import {CarosuelChrisComponent} from './carosuel-chris/carosuel-chris.component';


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
  },
  {
    path: 'chris',
    component: CarosuelChrisComponent
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
