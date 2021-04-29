import { Component, OnInit } from '@angular/core';
import { Pedido } from '../Models/pedidos';
import { PedidosService } from '../services/pedidos.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(public pedidosServicio: PedidosService, private route: Router) { }

  ngOnInit(): void {
  }

  calcularTotal(posicion: number)
  {
    this.pedidosServicio.pedido.actualizadCantidades(posicion);
    this.pedidosServicio.guardarLocalStorage();
  }

  guardar(){
    this.pedidosServicio.guardarPedido();
    alert("Pago efectuado Correctamente!!");
    this.route.navigateByUrl("/Historial-Compras");
  }

  eliminar (posicion:number)
  {
    this.pedidosServicio.pedido.pedidoDetalle.splice(posicion,1)
    this.pedidosServicio.guardarLocalStorage();
  }

  seguirComprando(){
    this.route.navigateByUrl("/productos");
  }

}
