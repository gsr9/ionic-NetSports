import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user.model';
@Component({
  selector: 'app-wall-item',
  templateUrl: './wall-item.component.html',
  styleUrls: ['./wall-item.component.scss'],
})
export class WallItemComponent implements OnInit {


  @Input() title: string;
  @Input() descripcion: string;
  @Input() usuario: string;
  imagen = '';

  constructor(private service: UserService) {

  }

  ngOnInit() {
    this.service.getUsuarioNombre(this.usuario)
      .subscribe((val: User[]) => {
        if(val.length>=1) this.imagen = val[0].foto;
        else this.imagen = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
        //console.log(val)
      });
    
  }

}
