import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearRutaPage } from './crear-ruta.page';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

const routes: Routes = [
  {
    path: '',
    component: CrearRutaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_RC6z5GEm8S2eBiwMyqabDXv2iiRKCHU'
    }),
    AgmDirectionModule
  ],
  declarations: [CrearRutaPage]
})
export class CrearRutaPageModule {}
