import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini Calculadora';
  numero1:number = 0;
  numero2:number = 0;
  resultado:number = 0;
  tipo_operacion:string = '';
  botonSuma:number = 0;
  botonResta:number = 0;
  botonMultiplicacion:number = 0;
  botonDivision:number = 0;


  resultadoAutomatico():void{

      if(this.botonSuma > this.botonResta && this.botonSuma  > this.botonMultiplicacion && this.botonSuma > this.botonDivision){

        this.resultado = this.numero1 + this.numero2;
        this.tipo_operacion = '+';

      }else if(this.botonResta > this.botonSuma && this.botonResta  > this.botonMultiplicacion && this.botonResta > this.botonDivision){

        this.resultado = this.numero1 - this.numero2;
        this.tipo_operacion = '-';

      }else if(this.botonMultiplicacion > this.botonSuma && this.botonMultiplicacion  > this.botonResta && this.botonMultiplicacion > this.botonDivision){

        this.resultado = this.numero1 * this.numero2;
        this.tipo_operacion = 'x';

      }else if(this.botonDivision > this.botonSuma && this.botonDivision  > this.botonMultiplicacion && this.botonDivision > this.botonResta){

        this.resultado = this.numero1 / this.numero2;
        this.tipo_operacion = '/';

      }
    
  }

  sumar():void{
    this.resultado = this.numero1 + this.numero2;
    this.tipo_operacion = '+';
    this.botonSuma ++;
    this.botonResta = 0;
    this.botonMultiplicacion = 0;
    this.botonDivision = 0;
  }

  resta():void{
    this.resultado = this.numero1 - this.numero2;
    this.tipo_operacion = '-';
    this.botonResta ++;
    this.botonSuma = 0;
    this.botonMultiplicacion = 0;
    this.botonDivision = 0;
  }

  mulplicacion():void{
    this.resultado = this.numero1 * this.numero2;
    this.tipo_operacion = 'x';
    this.botonMultiplicacion ++;
    this.botonSuma = 0;
    this.botonResta = 0;
    this.botonDivision = 0;
  }

  division():void{
    this.resultado = this.numero1 / this.numero2;
    this.tipo_operacion = '/';
    this.botonDivision ++;
    this.botonSuma = 0;
    this.botonResta = 0;
    this.botonMultiplicacion = 0;
  }


  limpiar(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
    this.tipo_operacion = '';
    this.botonSuma = 0;
    this.botonResta = 0;
    this.botonMultiplicacion = 0;
    this.botonDivision = 0;
  }

}
