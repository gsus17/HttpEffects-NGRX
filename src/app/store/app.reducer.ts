
import { ActionReducerMap } from '@ngrx/store';
import { UsuarioState, usuarioReducer } from './reducers/usuario.reducer';
import { UsuariosState, usuariosReducer } from './reducers/usuarios.reducer';

export interface AppState {
  usuarios: UsuariosState;
  usuario: UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
  usuarios: usuariosReducer,
  usuario: usuarioReducer
};
