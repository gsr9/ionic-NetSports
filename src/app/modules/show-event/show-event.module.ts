import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShowEventPage } from './show-event.page';
import { AgmCoreModule } from '@agm/core'

const routes: Routes = [
  {
    path: '',
    component: ShowEventPage
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
    })
  ],
  declarations: [ShowEventPage]
})
export class ShowEventPageModule {}
