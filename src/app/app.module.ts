import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CiudadComponent } from './Ciudad/Ciudad.component';

import {HttpClientModule} from '@angular/common/http';
import { ServicesService } from './Servicios/Services.service';
import { FormsModule } from '@angular/forms';



@NgModule({
   declarations: [
      AppComponent,
      CiudadComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [ServicesService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
