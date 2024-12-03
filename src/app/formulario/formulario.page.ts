import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage {
  formulario: FormGroup;
  datos: Usuario[] = [];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      edad: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      correo: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const nuevoUsuario: Usuario = this.formulario.value;
      this.datos.push(nuevoUsuario);
      this.formulario.reset();
    }
  }
}

interface Usuario {
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
}
