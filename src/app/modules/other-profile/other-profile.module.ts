import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HistoriaOtherComponent} from 'src/app/historia-other/historia-other.component'
import {ItemOtherComponent} from 'src/app/item-other/item-other.component'

import { IonicModule } from '@ionic/angular';

import { OtherProfilePage } from './other-profile.page';

const routes: Routes = [
  {
    path: '',
    component: OtherProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OtherProfilePage, HistoriaOtherComponent, ItemOtherComponent]
})
export class OtherProfilePageModule {}
