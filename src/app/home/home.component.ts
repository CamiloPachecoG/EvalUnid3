import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Clientes } from '../Models/clientes';
import { PedidosService } from '../services/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clientes: Array<Clientes> = new Array<Clientes>();
  
  page !: number;

  constructor(public clientesServicio: ClientesService, public pedidosServicio: PedidosService, private route: Router) { }

  ngOnInit(): void {
    this.clientes = this.clientesServicio.clientesLocalStorage;
  }

  buscarClientes(nombreBuscar)
  {
    this.clientes = this.clientesServicio.clientesLocalStorage.filter(x=> {
      return x.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  } 

  irAProductos(cliente: Clientes)
  {
    this.pedidosServicio.pedido.clienteID = cliente.clienteID;
    this.pedidosServicio.pedido.nombreCliente = cliente.nombre + ' ' + cliente.apellido
    this.pedidosServicio.guardarLocalStorage();
    this.route.navigateByUrl("/productos")
  }

}
