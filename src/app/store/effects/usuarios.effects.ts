import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';

import * as usuariosActions from '../actions/usuarios.actions';
import { of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';


@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    public usuariosService: UsuarioService) {
    console.log('EfectoService', usuariosActions.CARGAR_USUARIOS);
  }

  @Effect()
  cargarUsuarios$ = createEffect(() => this.actions$.pipe(
    ofType(usuariosActions.CARGAR_USUARIOS),
    switchMap(action => {
      return this.usuariosService.getUsers()
        .pipe(
          tap((users) => console.log('Efecto', users)),
          map(user => new usuariosActions.CargarUsuariosSuccess(user)),
          catchError(error => of(new usuariosActions.CargarUsuariosFail(error)))
        );
    })
  ));
}
