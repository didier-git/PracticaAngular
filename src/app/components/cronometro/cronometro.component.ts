import { mensaje } from './../../mensaje';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

 cronometro !: mensaje;

  @Input() initialValue !: number;
  @Input() id : string;
  value: number;
  @Output() mensaje: EventEmitter<mensaje>;


  constructor() {
    this.value = 10;
    this.mensaje = new EventEmitter();
    this.id = '' 
    
  }


  ngOnInit(): void {
    this.value = this.initialValue ? this.initialValue : 10;
    
  }

  start(): void {
    let interval = setInterval(() => {
      this.value--;
      if (this.value === 0) {
        clearInterval(interval);
        this.value = this.initialValue;
        console.log(this.cronometro);
        
       this.cronometro = {
        mensaje : 'El cronometro con el valor inicial '+this.initialValue+' ha terminado',
        identificador : this.id
       }
       
        
        this.mensaje.emit(this.cronometro);
      }
    }, 1000)
  }

}
