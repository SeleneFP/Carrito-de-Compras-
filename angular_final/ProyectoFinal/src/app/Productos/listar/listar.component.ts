import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../producto';
import { ServicioProductoService } from '../servicio-producto.service';
import { Router } from '@angular/router';
import { Cesto } from '../cesto';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  ArrayProductos: Producto[]  ;
  prd:Producto = new Producto();
  Carro:Cesto [] = [];

  constructor(private Pservice:ServicioProductoService,private route:Router){}

  ngOnInit(): void {
    this.obtener_productos();

    this.Carro = this.Pservice.cestoProductos;
 }

  private obtener_productos(){
    this.Pservice.get_ListaProductos().subscribe(dato=>{
      this.ArrayProductos = dato;
    })
  }

  comprar(id: string) {
    this.Pservice.get_BuscarProducto(id).subscribe(dato => {
      this.prd = dato;

      // Verificar si el producto ya está en el carrito
      const itemEnCarro = this.Carro.find(item => item.idProducto === this.prd.idProducto);

      if (itemEnCarro) {
        // Actualizar la cantidad y el monto total si el producto ya está en el carrito
        itemEnCarro.cantidad += 1;
        itemEnCarro.montototal = itemEnCarro.cantidad * this.prd.precioUnidad;
      } else {
        // Agregar nuevo producto al carrito
        this.Carro.push({
          idProducto: this.prd.idProducto,
          descripcion: this.prd.descripcion,
          imagen: this.prd.imagen,
          cantidad: 1,
          montototal: this.prd.precioUnidad
        });
      }

      // Actualizar el carrito en el servicio
      this.Pservice.cestoProductos = this.Carro;
    });
  }
}
