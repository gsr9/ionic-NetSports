import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  constructor(public afDB: AngularFireDatabase){
  }

  public setPublicaciones(titulo: String, descripcion: String, usuario: String, likes: String){

    return this.afDB.database.ref('/publicaciones').push({
      titulo: titulo,
      descripcion: descripcion,
      usuario: usuario,
      likes: likes
    })
  }

  public getPublicaciones(){
      return this.afDB.list('/publicaciones').valueChanges(); 
      //Esta función devolverá todos los datos que tengamos en el apartado fruits, en nuestra base de datos
  }
}
