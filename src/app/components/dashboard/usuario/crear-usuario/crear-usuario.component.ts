import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, MinLengthValidator, MinValidator, MaxValidator, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  sexo: any[] = [
    {value: 'Hombre', viewValue: 'Hombre'},
    {value: 'Mujer', viewValue: 'Mujer'},
    {value: 'Otro', viewValue: 'Otro'},
    {value: 'Sin Especificar', viewValue: 'Sin Especificar'},
  ];

  form: UntypedFormGroup;


  constructor(private fb:UntypedFormBuilder,
         private _usuarioService: UsuarioService,
         private router:Router,
         private _snackBar: MatSnackBar) {

    this.form = this.fb.group({
      usuario: [''],
      dni: [''],
      nombre: [''],
      apellido: [''],
      edad: [''],
      cumple: [''],
      color: [''],
      sexo: [''],
    })
   }


  ngOnInit(): void {
    this.form = new UntypedFormGroup({
       'usuario': new UntypedFormControl('', Validators.required),
       'dni': new UntypedFormControl(null, [Validators.required, Validators.maxLength(9)]),
       'nombre': new UntypedFormControl( null, [Validators.required, Validators.minLength(3)]),
       'apellido': new UntypedFormControl(null, [Validators.required, Validators.minLength(3)]),
       'edad': new UntypedFormControl(null,[ Validators.required, Validators.min(0), Validators.max(125)]),
       'cumple': new UntypedFormControl(null, Validators.required),
       'color': new UntypedFormControl(null, [Validators.required, Validators.minLength(3)]),
       'sexo': new UntypedFormControl(null, Validators.required),
     });

  }


  agregarUsuario() {
    console.log(this.form);

    const user: Usuario = {
      usuario: this.form.value.usuario,
      dni: this.form.value.idn,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      edad: this.form.value.edad,
      cumple: this.form.value.cumple,
      color: this.form.value.color,
      sexo: this.form.value.sexo,
    }


    console.log(user);

    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuario'])

    this._snackBar.open('El Usuario ha sido agregado correctamente', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    })
  }



}
