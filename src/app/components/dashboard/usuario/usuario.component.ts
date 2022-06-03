import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  listUsuarios: Usuario[] = [];

    displayedColumns: string[] = ['usuario', 'nombre', 'apellido','edad', 'dni', 'cumple', 'color','sexo', 'acciones' ];
    dataSource! : MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    // this.editar();
  }

  cargarUsuarios() {
    this.listUsuarios = this._usuarioService.getUsuarios();
    this.dataSource = new MatTableDataSource(this.listUsuarios)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index:number) {
    console.log(index);

    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();

    this._snackBar.open('El Usuario ha sido eliminado correctamente', '', {
        duration: 1500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      })
  }

  // editar(): void{
  //   this.activatedRoute.params.subscribe(
  //     e=> {
  //       const id=e['id'];
  //       if(id) {
  //         this._usuarioService.get(id).subscribe(
  //           es=>this.editar=es
  //         );
  //       }
  //     }
  //   );
  // }



}
