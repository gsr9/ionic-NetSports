import { Component, OnInit } from '@angular/core';
import {PublicacionesService} from '../../services/publicaciones.service'
import { Storage } from '@ionic/storage';
import {Router} from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
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
  constructor(public service:PublicacionesService,private storage: Storage,private router: Router) { }

  ngOnInit() {
  }

  logForm(form) {
    this.storage.get('user').then((val: User) => {
      this.service.setPublicaciones(this.todo.title,this.todo.description,val.username,"0")
      this.router.navigate(['/tabs/wall'])
    });

  }

}
