import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-empleado',
  imports: [FormsModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'

})
export class EmpleadoComponent {
    nombre ='Pablo'
    apellido = 'Rochera'
    edad = 19
    empresa ='IES Benigasló'
    direccion = ''

    cambiaDireccion(event:Event){

      this.direccion = (<HTMLInputElement>event.target).value
    }


    nacionalidad = "Española"



    habilitacionCuadro = false

    usuarioRegistrado = true

    textoDeRegistro = 'No hay nadie registrado'

    geRegistroUsuario(){

      this.usuarioRegistrado = false
    }

    setUsuarioRegistrado(event:Event){
      // alert('El usuario se acaba de registrar')

      // this.textoDeRegistro = 'El ususario se acaba de registrar'

      if((<HTMLInputElement>event.target).value=='si'){

          this.textoDeRegistro = 'El ususario se acaba de registrar'

      }else{

        this.textoDeRegistro = 'No hay nadie registrado'

      }
    }

}
