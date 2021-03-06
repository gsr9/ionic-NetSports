import { User } from 'src/app/shared/models/User.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators, Form } from '@angular/forms';
import { Storage } from '@ionic/storage'


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  mostrarBA = false;
  found = false;
  users = [];
  coincidentes = [];
  buscado = false;
  encontrado = false;
  onBuscarForm = this.fb.group({
    'userReq': ['', Validators.min(1)]
  });

  constructor(public storage: Storage, public userService: UserService, private fb: FormBuilder, private router: Router) {
    userService.getUsers()
      .subscribe(usersdb => { this.users = usersdb; });
  }

  async notifications(ev: any) {
    if (this.mostrarBA) {
      this.mostrarBA = false;
    } else {
      this.mostrarBA = true;
    }
  }

  public goToProfile(user: string){
    this.storage.get('user').then((val: User) => {
      var usu = val.username
        this.router.navigate(['/tabs/otherProfile'],{ queryParams: { user: user } })
    })
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

  /**
   * busquedaAve
event   */
  public async busquedaAve(event) {
    var dep = await this.storage.get('dep');
    var niv = await this.storage.get('niv');
    this.mostrarBA = false;

    if (dep == '') {
      dep = "edfwrewge";
    }
    if (niv == '') {
      niv = "refefgrtg";
    }

    this.coincidentes = [];
    this.found = false;
    this.encontrado = false;
    this.buscado = true;
    for (const user of this.users) {
      console.log(user.username)
      if (user.level.includes(niv) || user.deporte.includes(dep)) {
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

