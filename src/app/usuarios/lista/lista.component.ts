import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

import * as usuariosActions from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) { }

  public ngOnInit() {

    // Escucha los cambios ocurridos en Usuarios.
    this.store
      .select('usuarios')
      .subscribe(usuarios => {
        console.log('llego al subs', usuarios);
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
      });

    // Solicita el cargado de usuarios.
    this.store.dispatch(new usuariosActions.CargarUsuarios());
  }
}
