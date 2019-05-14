import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.page.html',
  styleUrls: ['./wall.page.scss'],
})
export class WallPage implements OnInit {

  users = []
  constructor(public fruitsService:UserService) {
    fruitsService.getFruits()
      .subscribe(fruits=>{
        this.users = fruits;
        console.log(this.users)
      });//Hacemos una llamada a nuestro servicio, al metodo getFruits y nos devolvera toda la fruta que hay en nuestr abase de datos
        // y las cargaremos en nuestro array
  }

  ngOnInit() {
  }

}
