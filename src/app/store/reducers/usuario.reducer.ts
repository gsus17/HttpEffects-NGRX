import { Usuario } from '../../models/usuario.model';
import * as fromUsuario from '../actions/usuario.actions';

export interface UsuarioState {
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial: UsuarioState = {
  user: null,
  loaded: false,
  loading: false,
  error: null
};

export function usuarioReducer(state = estadoInicial, action: fromUsuario.usuarioAcciones): UsuarioState {

  switch (action.type) {

    case fromUsuario.CARGAR_USUARIO:
      console.log('LLego al cargar', action);
      return {
        ...state,
        loading: true,
        error: null
      };

    case fromUsuario.CARGAR_USUARIO_SUCCESS:
      console.log('LLego al success', action);
      return {
        ...state,
        loading: false,
        loaded: true,
        user: { ...action.usuario }
      };

    case fromUsuario.CARGAR_USUARIO_FAIL:
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
