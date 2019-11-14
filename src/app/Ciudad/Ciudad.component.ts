import { Component, OnInit, Input, ɵConsole } from '@angular/core';

import { ServicesService } from '../Servicios/Services.service';
import { Ciuda } from 'src/Ciuda';
import { FormsModule } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { error } from 'util';


@Component({
  selector: 'app-Ciudad',
  templateUrl: './Ciudad.component.html',
  styleUrls: ['./Ciudad.component.css']
})
export class CiudadComponent implements OnInit {

  tiempos: any;
  tiempo: any;
  nombre: string = '';

  constructor(protected servi: ServicesService) { }

  ngOnInit() {
  }



  getServi() {
      this.servi.getServi(this.nombre).subscribe(
        (data: any) => {
          this.tiempos = data,
         console.log(data);
      }, error => {
        this.erro();
      }
      );
  }

  getSer(){
    this.servi.get(this.nombre).subscribe(
      data => {
        this.tiempo = data;
      }, error => {
        this.erro();
      }
     );
  }


  erro(){
    console.log(error),
        window.alert('POR FAVOR INGRES EL NOMBRE CORRECTAMENTE');
  }

  clear(){
    this.nombre = '';
    this.tiempo = '';
    this.tiempos = '';
  }

}
