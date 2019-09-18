import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

import * as usuarioActions from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  user: Usuario;
  loading: boolean;
  error: any;

  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>) { }

  public ngOnInit() {

    // Obtiene el parametro id.
    this.router.params
      .subscribe(params => {
        // tslint:disable-next-line:no-string-literal
        const id = params['id'];
        this.store.dispatch(new usuarioActions.CargarUsuario(id));
      });

    // Escucha los cambios ocurridos en Usuario.
    this.store
      .select('usuario')
      .subscribe(usuario => {

        this.user = usuario.user;
        this.loading = usuario.loading;
        this.error = usuario.error;
      });
  }
}
