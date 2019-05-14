import {Injectable} from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class UserService{
    
    constructor(public afDB: AngularFireDatabase){
    }

    public getFruits(){
        return this.afDB.list('/users').valueChanges(); 
        //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
    }

    //pruebas
    public setUsuarios(){
       return this.afDB.database.ref('/users').push({email: 'gcs2@gmail.com', pass: 'aprobado', username: 'gcs'});
    }

}