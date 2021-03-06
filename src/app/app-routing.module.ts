import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HomeComponent } from './home/home.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ListadoPedidosComponent } from './listado-pedidos/listado-pedidos.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent 
  },
  {
    path: 'productos', component: ProductosComponent
  },
  {
    path: 'carrito', component: PedidosComponent
  },
  {
    path: 'agregar-Clientes', component: AgregarClientesComponent
  },
  {
    path: 'agregar-productos', component: AgregarProductosComponent
  },
  {
    path: 'Historial-Compras', component: ListadoPedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
