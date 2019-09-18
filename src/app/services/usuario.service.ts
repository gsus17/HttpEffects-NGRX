import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  /**
   * Url mock.
   */
  private urlDefault = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }

  /**
   * Retorna el listado de usuarios.
   */
  public getUsers() {
    return this.http.get(`${this.urlDefault}/users?per_page=6`)
      .pipe(
        // Solo devuelve el data de toda la respuesta.
        // tslint:disable-next-line:no-string-literal
        map(resp => resp['data'])
      );
  }

  /**
   * Retorna un el dato de un usuario segun el id especificado.
   */
  public getUserById(id: string) {
    return this.http.get(`${this.urlDefault}/users/${id}`)
      .pipe(
        // Solo devuelve el data de toda la respuesta.
        // tslint:disable-next-line:no-string-literal
        map(resp => resp['data'])
      );
  }
}
