import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ventas } from './ventas';

@Injectable({
  providedIn: 'root'
})
export class ServicioVentasService {
  private static nextPedidoId: number = 1;

  private baseURL1 ="http://localhost:8091/api/v1/get_pedidos"
  constructor(private http:HttpClient) { }
  get_ListaPedidos():Observable<Ventas[]>{
    return this.http.get<Ventas[]>(`${this.baseURL1}`);
  }
  getLastPedidoId(): Observable<string> {
    return this.get_ListaPedidos().pipe(
      map(pedidos => {
        // Obtener el último ID de pedido de la lista
        const lastPedido = pedidos[pedidos.length - 1];
        if (!lastPedido) {
          return 'VTA0000001'; // Si no hay pedidos, devuelve el primer ID
        }

        // Extraer el número del último ID
        const lastId = lastPedido.idPedido;
        const lastNumber = parseInt(lastId.substring(3), 10);
        const nextNumber = lastNumber + 1;

        // Formatear el siguiente ID
        const nextId = 'VTA' + ('0000000' + nextNumber).slice(-7);
        return nextId;
      })
    );
  }

  CrearPedido(pro:Ventas):Observable<Object>{
   return this.http.post(`${this.baseURL1}`,pro);
   }
}
