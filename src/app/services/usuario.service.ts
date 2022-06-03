import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuarios';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: 'barbaraDTM', nombre: 'Barbara', apellido: 'Delatorre', edad:23, dni: '12345678L', cumple: 11071998, color: 'Azul', sexo: 'Mujer' },
    {usuario: 'berto', nombre: 'Alberto', apellido: 'Marquez Gil', edad:24, dni: '87654321M', cumple: 30011999, color: 'Rojo', sexo: 'Sin Especificar' },
    {usuario: 'dandan', nombre: 'Damian', apellido: 'Rodriguez Perez', edad:22, dni: '24681357P', cumple: 4121989, color: 'Dorado', sexo: 'Otro' },
    {usuario: 'shenii', nombre: 'Shen', apellido: 'Shuaru', edad:21, dni: '13572468B', cumple: 6102000, color: 'Amarillo', sexo: 'Hombre' },
    {usuario: 'MarcoOs', nombre: 'Marcos', apellido: 'Garrido Castillo', edad:21, dni: '11131517U', cumple: 6102000, color: 'Verde', sexo: 'Hombre' },
    {usuario: 'Mari@', nombre: 'Maria', apellido: 'Gonzalez Carmona', edad:20, dni: '10121416H', cumple: 6102000, color: 'Morado', sexo: 'Mujer' },
    {usuario: 'Martita', nombre: 'Marta', apellido: 'Rufo Reyes', edad:27, dni: '18192021J', cumple: 6102000, color: 'Naranja', sexo: 'Mujer' },
    {usuario: 'Luna', nombre: 'Moon', apellido: 'Creciente Martin', edad:25, dni: '98302921T', cumple: 6102000, color: 'Turquesa', sexo: 'Otro' },
    {usuario: 'Sol', nombre: 'Soledad', apellido: 'Carrasco Hernandez', edad:27, dni: '76342810S', cumple: 6102000, color: 'Esmeralda', sexo: 'Sin Espacificar' },
  ];

  constructor() { }

  getUsuarios(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index:number) {
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }


}

