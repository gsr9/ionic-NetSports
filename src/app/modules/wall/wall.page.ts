import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {PublicacionesService} from '../../services/publicaciones.service'

@Component({
  selector: 'app-wall',
  templateUrl: './wall.page.html',
  styleUrls: ['./wall.page.scss'],
})
export class WallPage implements OnInit {

  publications = []
  constructor(public service:PublicacionesService) {
    service.getPublicaciones()
      .subscribe(publicaciones=>{
        this.publications = publicaciones;
        console.log(this.publications)
      });
  }

  ngOnInit() {
  }

}
