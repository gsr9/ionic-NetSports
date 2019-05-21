import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service'
import { User } from 'src/app/shared/models/user.model'

@Component({
  selector: 'app-item-other',
  templateUrl: './item-other.component.html',
  styleUrls: ['./item-other.component.scss'],
})
export class ItemOtherComponent implements OnInit {

  @Input() nombre: string;
  imagen: string;

  constructor(private service: UserService) {
    
    
  }

  ngOnInit() {
    this.service.getUsuarioNombre(this.nombre)
      .subscribe((val: User[]) => {
        if(val.length>=1) this.imagen = val[0].foto;
        else this.imagen = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        //console.log(val)
      });
  }

}
