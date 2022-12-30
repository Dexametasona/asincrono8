import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaComponent } from './entrada/entrada.component';
import { SalidaComponent } from './salida/salida.component';



@NgModule({
  declarations: [
    EntradaComponent,
    SalidaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EntradaComponent,
    SalidaComponent
  ]
})
export class ComponentesModule { }
