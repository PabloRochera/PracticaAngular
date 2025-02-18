import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  imports: [FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Lista de Empleados';
  empleados:Empleado[] = [

    new Empleado('Pablo', 'Garcia', 'Gerente', 5000),
    new Empleado('Jose', 'Gomez', 'Contadora', 4000),
    new Empleado('Sandra', 'Diaz', 'Programadora', 3000),
    new Empleado('Berta', 'Rodriguez', 'Diseñador', 2000),
    new Empleado('Lucas', 'Martinez', 'Tester', 1000)
  ];


  agregarEmpleado(){
    let empleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(empleado);
    this.cuadroNombre = '';
    this.cuadroApellido = '';
    this.cuadroCargo = '';
    this.cuadroSalario = 0;
  }

  cuadroNombre:string = '';
  cuadroApellido:string = '';
  cuadroCargo:string = '';
  cuadroSalario:number = 0;


}
