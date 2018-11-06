import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CarreteComponent } from './carrete/carrete.component';
import { CarosuelComponent } from './carosuel-chris/carosuel-chris.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {InstagramChrisService} from './instagram-chris.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CarosuelComponent,
    CarreteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [InstagramChrisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
