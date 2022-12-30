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

  añadir(){
    this.obreros.push(new Obreros(nombre, apell, edad))
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
