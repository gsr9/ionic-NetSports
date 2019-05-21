import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../shared/models/User.model';

@Injectable()
export class UserService {

    constructor(public afDB: AngularFireDatabase) {
    }

    public getUsers() {
        return this.afDB.list('/users').valueChanges();
        // Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    }

    public getUsuarioNombre(nombre: string){
        return this.afDB.list('/users', ref =>
        ref.orderByChild('username').equalTo(nombre)
        ).valueChanges();
    }
    public getUserByEmail(email: string) {
        // return this.afDB.list('users', ref =>
        //     ref.orderByChild('email').equalTo(email)
        // ).valueChanges();
       return this.afDB.list('users', ref =>
            ref.orderByChild('email').equalTo(email)).snapshotChanges();
    }

    public updateUser(key: string, user: User) {
        return this.afDB.object('/users/' + key).update(user);
    }

}
