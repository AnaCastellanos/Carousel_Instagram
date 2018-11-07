import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {CarouselComponent} from './carousel-jorge/carousel.component';
import {CarreteComponent} from './carrete/carrete.component';
import {AppRoutingModule} from './app-routing.module';
import {InstagramJorgeService} from './instagram.jorge.service';
import {HttpModule} from '@angular/http';
import {CarosuelChrisComponent} from './carosuel-chris/carosuel-chris.component';
import {InstagramChrisService} from './instagram-chris.service';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarreteComponent,
    CarosuelChrisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [InstagramJorgeService, InstagramChrisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
