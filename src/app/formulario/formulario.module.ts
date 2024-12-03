import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';

import { FormularioPageRoutingModule } from './formulario-routing.module';
import { FormularioPage } from './formulario.page';
import { HeaderComponent } from '../components/header/header.component'; 
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    IonicModule,
    FormularioPageRoutingModule,
    SharedModule
  ],
  declarations: [
    FormularioPage

  ]
})
export class FormularioPageModule {}
