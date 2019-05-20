import { UserService } from '../../../../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-optbusqueda',
  templateUrl: './optbusqueda.component.html',
  styleUrls: ['./optbusqueda.component.scss'],
})
export class OptbusquedaComponent implements OnInit {

  @Output() loquesea = new EventEmitter()

  deporte = '';
  nivel = '';
  constructor(public userService: UserService, public storage: Storage) { 
    
  }

  ngOnInit() {}

  public async busquedaAv(){
    await this.storage.set('dep',this.deporte);
    await this.storage.set('niv',this.nivel);
    this.loquesea.emit();
  }
}
