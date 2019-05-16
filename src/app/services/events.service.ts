import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private showevent: Event;

  constructor(public afDB: AngularFireDatabase) { }

  public getEvents(){
    return this.afDB.list<Event>('/events').valueChanges(); 
  }

  public createEvent(tit: string, fec: string, dep: string, des: string,crea: string,lat: string, long: string, us: string[], lu: string){
    return this.afDB.database.ref('/events').push({titulo: tit, deporte: dep ,fecha: fec, descripcion: des,creador: crea, latitud: lat, longitud:long, users: us, lugar: lu})
  }

  public setShowEvent(evento: Event){
    this.showevent = evento;
  }

  public getShowEvent(){
    return this.showevent;
  }

}
