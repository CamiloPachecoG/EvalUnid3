import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Productos } from '../Models/productos';
import { PedidosService } from '../services/pedidos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Array<Productos> = new Array <Productos>();

  page !: number;

  constructor(public productosServicio: ProductosService,  public pedidosServicio: PedidosService, private route: Router) { }

  ngOnInit(): void {
    this.productos = this.productosServicio.productosLocalStorage;
  }

  buscarProductos(nombreBuscar){
    this.productos = this.productosServicio.productosLocalStorage.filter(producto=>{
      return producto.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase())
    })
  }

  agregar(producto: Productos)
  {
    this.pedidosServicio.pedido.agregarProducto(producto);
    this.pedidosServicio.guardarLocalStorage();
    alert('Producto Agregado al carrito');
    this.route.navigateByUrl("/carrito")
  }

  eliminarTodosLS(){
    console.log('error');
  }

}
