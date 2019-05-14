import {Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class UserService {

    constructor(public afDB: AngularFireDatabase) {
    }

    public getUsers() {
        return this.afDB.list('/users').valueChanges();
        // Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    }

}
