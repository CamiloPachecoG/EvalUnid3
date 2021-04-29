import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ListadoPedidosComponent } from './listado-pedidos/listado-pedidos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//services
import { ClientesService } from './services/clientes.service';
import { ProductosService } from './services/productos.service';
import { PedidosService } from './services/pedidos.service';

//paginacion
import { NgxPaginationModule } from 'ngx-pagination';
//import { SearchPipe } from './pipes/search.pipe';
import { ImagenComponent } from './imagen/imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EncabezadoComponent,
    PedidosComponent,
    ProductosComponent,
    AgregarClientesComponent,
    AgregarProductosComponent,
    ListadoPedidosComponent,
    ImagenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    ClientesService,
    ProductosService,
    PedidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
