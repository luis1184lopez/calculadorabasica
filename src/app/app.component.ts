import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dato1:number;
  dato2:number;
  resultado:number;
  title = 'calculadorabasica';

  sumar(){
    this.resultado= (this.dato1*1)  + (this.dato2*1);
    }
  restar(){
    this.resultado= (this.dato1*1) - (this.dato2*1);
    }
  multiplicar(){
    this.resultado= (this.dato1*1)  * (this.dato2*1);
    }
  dividir(){
    this.resultado= (this.dato1*1)  / (this.dato2*1);
    }
}
