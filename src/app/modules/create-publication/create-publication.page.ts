import { Component, OnInit } from '@angular/core';
import {PublicacionesService} from '../../services/publicaciones.service'
@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.page.html',
  styleUrls: ['./create-publication.page.scss'],
})
export class CreatePublicationPage implements OnInit {

  todo = {
    title: '',
    description: ''
  };
  constructor(public service:PublicacionesService) { }

  ngOnInit() {
  }

  logForm(form) {
    this.service.setPublicaciones(this.todo.title,this.todo.description,"","0")
    console.log(form.value)
  }

}
