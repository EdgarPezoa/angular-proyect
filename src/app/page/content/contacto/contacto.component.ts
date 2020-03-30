import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  formulario: FormGroup;
  formularioEnviado:boolean;
  constructor(private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.formularioEnviado = false;
    this.formulario = this.formBuilder.group({
      nombre:['', Validators.required],
      email: ['', Validators.required],
      asunto: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  enviarFormulario(){
    console.log(this.formulario.value);
    // Enviar Correo!
    this.formularioEnviado = true;
    this.formulario.reset();
  }

}
