import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  Operacion : string;
  IsValid : boolean;
  num1 : string;
  num2 : string;
  expresionOperacion : RegExp;


  

  constructor() {
    this.Operacion = '';
    this.num1 = '0';
    this.num2 = '0';
    this.IsValid = false;
    this.expresionOperacion = new RegExp('/\d[+*/-]{1}\d/')
    

   }

  ngOnInit(): void {
  }

  addNumber($event: any):void{
    if(this.expresionOperacion.test(this.Operacion)){

    }
  }

  operacion($event : any): void{

    if(this.IsValid){

    }

  }

}
