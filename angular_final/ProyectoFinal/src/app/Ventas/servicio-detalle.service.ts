import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Detalle } from './detalle';

@Injectable({
  providedIn: 'root'
})
export class ServicioDetalleService {

  private static nextPedidoId : number = 1 ;

  private baseURL1 ="http://localhost:8091/api/v1/get_detallePedidos"
  
  constructor(private http:HttpClient) { }
  
  CrearDetallePedido(pro:Detalle):Observable<Object>{
  return this.http.post(`${this.baseURL1}`,pro);
  }
}
