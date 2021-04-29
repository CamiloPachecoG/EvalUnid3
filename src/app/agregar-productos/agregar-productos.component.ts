import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos.service';
//import { Productos } from '../Models/productos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {

  constructor(private fb: FormBuilder, public productosServicio: ProductosService, private route: Router) { }

  formularioAgregar: FormGroup;

  ngOnInit(): void {
    this.formularioAgregar = this.fb.group({
      nombre:['', Validators.required],
      descripcion:['', Validators.required],
      precio:['', Validators.required]
    });
  }

  agregar()
  {
    this.productosServicio.agregarLocalStorage(this.formularioAgregar.value);
    this.formularioAgregar.reset();
    this.route.navigateByUrl("/productos");
  }

}
