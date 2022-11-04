import { mensaje } from './mensaje';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mensajeTerminado : string;
  mensajeTerminado2 : string;
  mensajeTerminado3 : string;
  title = 'PracticaAngular';

  constructor(){
    this.mensajeTerminado = '';
    this.mensajeTerminado2 = '';
    this.mensajeTerminado3 = '';
  }

  onTerminado($event :mensaje):void{

    switch ($event.identificador) {
      case "1" : {
      this.mensajeTerminado = $event.mensaje;
      break;
      }
      case "2" : {
        this.mensajeTerminado2 = $event.mensaje;
        break;

      }
      case "3" : {
        this.mensajeTerminado3 = $event.mensaje;
        break;
      }
    }

    

  }
  


}
