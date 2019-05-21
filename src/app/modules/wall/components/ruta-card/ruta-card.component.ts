import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-ruta-card',
  templateUrl: './ruta-card.component.html',
  styleUrls: ['./ruta-card.component.scss'],
})
export class RutaCardComponent implements OnInit {
  @Input() title: string;
  @Input() descripcion: string;
  @Input() usuario: string;
  @Input() fecha: string;
  user: User;

  constructor(private userService: UserService) { 
    
  }

  ngOnInit() {
    this.userService.getUserByEmail(this.usuario)
    .subscribe((actions)=>{ 
      this.user = actions[0].payload.val() as User;
    })
    
  }

}
