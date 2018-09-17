import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL = 'http://localhost:3000';

  constructor(private HttpClient: HttpClient) { }

  getUsuarios(): any {
    return this.HttpClient.get(`${this.URL}/usuarios`);
  }

  setUsuario(usuario: Object): any {
    const header: HttpHeaders = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this.HttpClient.post(`${this.URL}/usuarios`, usuario);
  }
}
