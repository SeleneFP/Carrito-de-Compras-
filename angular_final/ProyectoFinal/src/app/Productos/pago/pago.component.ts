import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cesto } from '../cesto';
import { ServicioProductoService } from '../servicio-producto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent implements OnInit{
  Carro:Cesto [] = [];
  
  constructor(private Pservice:ServicioProductoService,private route:Router){}
  
  ngOnInit(): void {
    this.Carro = this.Pservice.cestoProductos;
  }

  pagar(): void {
    Swal.fire({
      title: 'Confirmación',
      text: '¿Estás seguro de que deseas proceder con la compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, proceder',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Acción a tomar si el usuario confirma
        this.route.navigate(['pth_CrearPedido']);
      } else {
        // Acción a tomar si el usuario cancela (opcional)
        console.log('Compra cancelada');
      }
    });
  }
}
