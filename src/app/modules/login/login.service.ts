import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';
import { User } from './../../shared/models/User.model';
import { Storage } from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private userService: UserService,
    private storage: Storage) { }

  login(email: string, pass: string) {
    let found = false;
    this.userService.getUsers().subscribe( (usersdb: User[]) => {
      for (const user of usersdb) {
        if (email === user.email && pass === user.password) {
          found = true;
          this.storage.set('user', user);
          break;
        }
      }
    });

    return found;
  }
}
