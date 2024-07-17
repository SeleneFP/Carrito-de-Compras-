import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from '../servicio-usuario.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent implements OnInit{
  new_usuario : Usuario = new Usuario() ; 
  fecha :string;

  constructor(private Uservice:ServicioUsuarioService,private route:Router){}

  ngOnInit(): void {}

  guardar(){
    this.Uservice.CrearUsuario(this.new_usuario).subscribe(dato=>{
      console.log(dato);
      this.route.navigate(['pth_iniciosesion']); 
    })
  }

  onSubmit(){
    this.guardar();
  }

}