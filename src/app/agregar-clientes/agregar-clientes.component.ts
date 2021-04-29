import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Clientes } from '../Models/clientes';
import { ClientesService } from '../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.css']
})
export class AgregarClientesComponent implements OnInit {

  formularioAgregar: FormGroup;
  cliente: Clientes = new Clientes();

  constructor(private fb: FormBuilder, public clientesServicio: ClientesService, private route: Router) { }

  ngOnInit(): void {
    this.formularioAgregar = this.fb.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      direccion:['', Validators.required],
      pais:['', Validators.required],
      ciudad:['', Validators.required],
      region:['', Validators.required],
      codPostal:['', Validators.required],
      tipoTarjeta:['', Validators.required],
      numTarjeta:['', Validators.required],
      codSeg:['', Validators.required],
      MyAexp:['', Validators.required],
    });
  }

  agregar(){
    this.cliente = this.formularioAgregar.value as Clientes;
    this.clientesServicio.agregarLocalStorage(this.cliente)
    this.formularioAgregar.reset();
    this.route.navigateByUrl("/")
  }

}
