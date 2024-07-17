import { Component, OnInit } from '@angular/core';
import { Cesto } from '../../Productos/cesto';
import { Ventas } from '../ventas';
import { ServicioVentasService } from '../servicio-ventas.service';
import { ServicioProductoService } from '../../Productos/servicio-producto.service';
import { ServicioUsuarioService } from '../../Usuarios/servicio-usuario.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { Detalle } from '../detalle';
import { ServicioDetalleService } from '../servicio-detalle.service';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent implements OnInit {
  cesto:Cesto[] = [];
  new_pedido:Ventas = new Ventas();
  new_detalle:Detalle = new Detalle();

  constructor(private Dservice:ServicioDetalleService, private Peservice:ServicioVentasService,private Pservice:ServicioProductoService,private Uservice:ServicioUsuarioService,private route:Router){}

  ngOnInit(): void {
    this.cesto = this.Pservice.cestoProductos;
    this.crearPedido();
  }

  crearPedido() {
    const montoTotal = this.cesto.reduce((total, item) => total + item.montototal, 0);
    const fechaVenta = formatDate(new Date(), 'yyyy-MM-ddTHH:mm:ss', 'en-US');
    
    this.Peservice.getLastPedidoId().subscribe(nextPedidoId => {
      this.new_pedido.fechaVenta = fechaVenta;
      this.new_pedido.estado = '1';
      this.new_pedido.montoTotal = montoTotal;
      this.new_pedido.idPedido = nextPedidoId;
      this.new_pedido.idUsuario = this.Uservice.LOGEADO.idUsuario.toString();

      this.Peservice.CrearPedido(this.new_pedido).subscribe(dato => {
        // Crear detalles solo si el pedido se creó exitosamente
        this.cesto.forEach(Cesto => {
          this.new_detalle.idPedido     = this.new_pedido.idPedido;
          this.new_detalle.idProducto   = Cesto.idProducto;
          this.new_detalle.cantidad     = Cesto.cantidad;
          this.new_detalle.precioUnidad = Cesto.montototal / Cesto.cantidad ;
          this.new_detalle.estado       = '1';
    
         this.Dservice.CrearDetallePedido(this.new_detalle).subscribe(dato => {});
    
        });
        // Navegar después de crear el pedido y los detalles
        this.route.navigate(['pth_iniciosesion']);
      });
    });
  }
}
