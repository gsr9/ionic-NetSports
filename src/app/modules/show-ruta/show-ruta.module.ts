import { CompararComponent } from './components/comparar/comparar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShowRutaPage } from './show-ruta.page';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

const routes: Routes = [
  {
    path: '',
    component: ShowRutaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_RC6z5GEm8S2eBiwMyqabDXv2iiRKCHU'
    }),
    AgmDirectionModule
  ],
  declarations: [ShowRutaPage, CompararComponent],
  entryComponents: [CompararComponent]
})
export class ShowRutaPageModule {}
