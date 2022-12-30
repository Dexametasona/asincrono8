import { Obreros } from './obrero.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss']
})
export class EntradaComponent implements OnInit {
  obreros:Obreros[]=[
    new Obreros('carlos', 'menem', 50),
    new Obreros('Lula', 'Da silva', 60),
  ]

  cuadroNombre:string='';
  cuadroApell:string='';
  cuadroEdad:number=0;

  anadir(){
    this.obreros.push(new Obreros(this.cuadroNombre, this.cuadroApell, this.cuadroEdad))
    this.cuadroNombre='';
    this.cuadroApell='';
    this.cuadroEdad=0;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
