import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(public afDB: AngularFireDatabase) { }

  public getEvents(){
    return this.afDB.list('/events').valueChanges(); 
  }

  public createEvent(titulo: String, fecha: String, deporte: String, descripcion: String, users: String[]){
    return this.afDB.database.ref('/events').push({Titulo: titulo, Fecha: fecha, Deporte: deporte, Descripcion: descripcion, Users: users})
  }

}
