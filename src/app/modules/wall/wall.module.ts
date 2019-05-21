import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { WallItemComponent } from './components/wall-item/wall-item.component';
import { WallPage } from './wall.page';
import { RutaCardComponent } from './components/ruta-card/ruta-card.component';

const routes: Routes = [
  {
    path: '',
    component: WallPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WallItemComponent,WallPage,RutaCardComponent]
})
export class WallPageModule {}
