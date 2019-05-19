import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { Event } from 'src/app/event';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  showevent: Event;

  constructor(public afDB: AngularFireDatabase) {
   }

  /*public getEvents(){
    return this.afDB.list<Event>('/events').valueChanges(); 
  }*/

  public getEvents(){
    return this.afDB.list<Event>('/events').snapshotChanges()
    .pipe(map(items => {           // <== new way of chaining
      return items.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return {key, ...data};           // or {key, ...data} in case data is Obj
      });
    }));
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

  public updateEvent(evento: Event){
    return this.afDB.database.ref('/events/' + evento.key).set({
      titulo: evento.titulo, 
      deporte: evento.deporte,
      fecha: evento.fecha,
      descripcion: evento.descripcion,
      creador: evento.creador,
      latitud: evento.latitud,
      longitud:evento.longitud,
      users: evento.users,
      lugar: evento.lugar
    })
  }

}
