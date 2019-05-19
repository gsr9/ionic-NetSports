import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HistoriaProfileComponent} from 'src/app/historia-profile/historia-profile.component'
import {ItemUsuarioComponent} from 'src/app/item-usuario/item-usuario.component'

import { IonicModule } from '@ionic/angular';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage, HistoriaProfileComponent, ItemUsuarioComponent]
})
export class ProfilePageModule {}
