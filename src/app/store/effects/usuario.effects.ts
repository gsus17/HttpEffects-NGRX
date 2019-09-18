import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';

import * as usuarioActions from '../actions/usuario.actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    public usuariosService: UsuarioService) { }

  @Effect()
  cargarUsuario$ = createEffect(() => this.actions$.pipe(
    ofType(usuarioActions.CARGAR_USUARIO),
    switchMap(action => {

      // tslint:disable-next-line:no-string-literal
      const id = action['id'];
      return this.usuariosService.getUserById(id)
        .pipe(
          map(user => new usuarioActions.CargarUsuarioSuccess(user)),
          catchError(error => of(new usuarioActions.CargarUsuarioFail(error)))
        );
    })
  ));
}
