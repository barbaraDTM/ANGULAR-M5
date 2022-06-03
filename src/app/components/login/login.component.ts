import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup;
  loading = false;

  constructor(private fb:UntypedFormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form= this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  iniciar(){

    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'barbara' && password == 'bejob') {
       // Redirección a Dashboard (PAG 2 del ejercicio bejob)
       this.fakeloading();
    } else {
     // Mensaje de Error
     this.error();
     this.form.reset();
   }}


  error() {
   this._snackBar.open('El Usuario o Contraseña ingresados son invalidos', '', {
     duration: 5000,
     horizontalPosition: 'center',
     verticalPosition: 'bottom',
   })
 }

fakeloading() {
  this.loading = true;
  setTimeout(() => {

    this.router.navigate(['dashboard']);
  }, 1500);
}


}


