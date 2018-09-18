import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.HttpClient.post(`${this.URL}/usuarios`, usuario);
  }

  getUsuario(id: any): any {
    return this.HttpClient.get(`${this.URL}/usuarios/${id}`);
  }
  
  // TODO: alterar este metodo para salvar os dados no Web Service
  updateUsuario(id: any): any {
    return this.HttpClient.get(`${this.URL}/usuarios/${id}`);
  }
}
