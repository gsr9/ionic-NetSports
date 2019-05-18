import { firebaseConfig } from './../../app.module';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../../shared/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private firebaseService: AngularFireDatabase) { }

  addUser(email: string, username: string, password: string, level: string) {
    const user = new User(email, username, password, level);
    const result = this.firebaseService.database.ref('/users').push(user);
  }
}
