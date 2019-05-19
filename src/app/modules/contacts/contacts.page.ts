import { Component, OnInit } from '@angular/core';
import { OptbusquedaComponent } from './../../components/optbusqueda/optbusqueda.component';
import { PopoverController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  found = false;
  users=[];
  coincidentes=[];
  buscado = false;
  encontrado = false;
  onBuscarForm = this.fb.group({
    'userReq': ['',Validators.min(1)]
  });

  constructor(public popoverController: PopoverController,public userService: UserService, private fb: FormBuilder) { 
    userService.getUsers()
      .subscribe(usersdb => { this.users = usersdb; });
  }

  async notifications(ev: any) {
    const popover = await this.popoverController.create({
        component: OptbusquedaComponent,
        event: ev,
        animated: true,
        showBackdrop: true
    });
    return await popover.present();
}

  ngOnInit() {
  }

  /**
   * buscar
   */
  public buscar(username: string) {
    this.coincidentes = [];
    this.found = false;
    this.encontrado = false;
    this.buscado = true;
    console.log(username)
    for (const user of this.users) {
      //console.log(user.username)
      if (user.username.includes(username)) {
        this.found = true;
        this.coincidentes.push(user)
      }
    }
    console.log(this.coincidentes)
    if (this.found) {
      this.encontrado = true;
    } else {
      this.encontrado = false;
    }
  }
  
}
