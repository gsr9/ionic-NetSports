import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-optbusqueda',
  templateUrl: './optbusqueda.component.html',
  styleUrls: ['./optbusqueda.component.scss'],
})
export class OptbusquedaComponent implements OnInit {

  deporte = '';
  nivel = '';
  constructor(public userService: UserService) { 
    
  }

  ngOnInit() {}

}
