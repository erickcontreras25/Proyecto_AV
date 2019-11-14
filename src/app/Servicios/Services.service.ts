import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

constructor(private servi: HttpClient) { }

urlForecast: string = 'http://api.openweathermap.org/data/2.5/forecast?';
urlWeather: string = 'http://api.openweathermap.org/data/2.5/weather?';

getServi(nombre: string) {
  return this.servi.get(`${this.urlForecast}q=${nombre}&units=metric&cnt=5&APPID=2ebb8d634e6ad8b6841eb487bcd37103`);
}

get(nombre: string) { 
  return this.servi.get(`${this.urlWeather}q=${nombre}&units=metric&APPID=2ebb8d634e6ad8b6841eb487bcd37103`);
}

}
