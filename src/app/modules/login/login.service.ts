import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(email: string, password: string) {
    // Llamar al servicio de BD que comprueba si existe y devuelva o almacene en el storage un User
  }
}
