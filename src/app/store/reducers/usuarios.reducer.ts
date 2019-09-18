import { Usuario } from '../../models/usuario.model';
import * as fromUsuarios from '../actions/usuarios.actions';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function usuariosReducer(state = estadoInicial, action: fromUsuarios.usuariosAcciones): UsuariosState {

  switch (action.type) {

    case fromUsuarios.CARGAR_USUARIOS:
      console.log('LLego al cargar', action);
      return {
        ...state,
        loading: true,
        error: null
      };

    case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
      console.log('LLego al success', action.usuarios);
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.usuarios]
      };

    case fromUsuarios.CARGAR_USUARIOS_FAIL:
      console.log('LLego al fail', action);
      return {
        ...state,
        loaded: false,
        loading: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    default:
      return state;

  }
}
