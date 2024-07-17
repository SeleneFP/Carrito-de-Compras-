import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {
  private baseURL1 =" http://localhost:8091/api/v1/get_usuarios   "
  LOGEADO:Usuario = new Usuario();

  constructor(private http:HttpClient) { }
  get_ListaUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.baseURL1}`);
   }

  get_BuscarUsuario(id:number ):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseURL1}/${id}`);
   }

  CrearUsuario(pro:Usuario):Observable<Object>{
   return this.http.post(`${this.baseURL1}`,pro);
  }
}
