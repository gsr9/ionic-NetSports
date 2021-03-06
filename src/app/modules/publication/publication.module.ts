import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PublicationPage } from './publication.page';
import { CommentsComponent} from './comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: PublicationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PublicationPage,CommentsComponent]
})
export class PublicationPageModule {}
