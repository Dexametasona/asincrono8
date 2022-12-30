import { Obreros } from './../entrada/obrero.module';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.scss']
})
export class SalidaComponent implements OnInit {
  @Input() obreroshijo:Obreros[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
