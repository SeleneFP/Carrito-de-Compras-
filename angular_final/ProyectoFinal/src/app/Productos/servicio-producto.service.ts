import { Injectable } from '@angular/core';
import { Producto } from './producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cesto } from './cesto';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductoService {
  private baseURL1 ="http://localhost:8091/api/v1/get_productos";
  carritoProductos: Producto[] = [];
  cestoProductos:Cesto[] = [];


  constructor(private http: HttpClient) { }

  get_ListaProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseURL1}`);
   }

  get_BuscarProducto(id: string): Observable<Producto> {
    return this.http.get<Producto>(`${this.baseURL1}/${id}`);
  }

 
}
