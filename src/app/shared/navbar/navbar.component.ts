import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit() {
  }

  /**
   * Redirecciona a la vista de usuario basado en el id especificado.
   */
  public irUsuario(id: string) {

    if (id) {
      this.router.navigate(['/usuario', id]);
    }
  }
}
