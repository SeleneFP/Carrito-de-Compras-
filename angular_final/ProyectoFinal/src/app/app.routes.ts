import { Routes } from '@angular/router';
import { MainComponent } from './Usuarios/main/main.component';
import { RegistrarComponent } from './Usuarios/registrar/registrar.component';
import { ListarComponent } from './Productos/listar/listar.component';
import { CarritoComponent } from './Productos/carrito/carrito.component';
import { PagoComponent } from './Productos/pago/pago.component';
import { CrearComponent } from './Ventas/crear/crear.component';

export const routes: Routes = [
    {path : 'pth_iniciosesion',component:MainComponent},
    {path : '',redirectTo:'pth_iniciosesion',pathMatch:'full'},
    {path : 'pth_registrar',component:RegistrarComponent},
    {path : 'pth_listaProducto',component:ListarComponent},
    {path : 'pth_Carrito',component:CarritoComponent},
    {path : 'pth_Pago',component:PagoComponent},
    {path : 'pth_CrearPedido',component:CrearComponent}
];
