import { EventsService } from 'src/app/services/events.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventos = []
  users :String;
  constructor(public eventsService: EventsService) { }

  ngOnInit() {
  }

  /*anyadirEvento(){
    let titulo: String = '¿Jugamos una pachanga?';
    let fecha: String = '03/11/2019';
    let deporte: String = 'Fútbol';
    let descripcion: String = '¿A quien le apetece jugar unas pachangas de fútbol este viernes?';
    let users: String[] = ['Fran', 'Jorge', 'Pablo'];
    this.eventsService.createEvent(titulo, fecha, deporte,descripcion, users);
    this.eventsService.getEvents()
    .subscribe(events=>{
      this.eventos = events;
      console.log(this.eventos);
    })
    
  }*/

  getEvento(){
    this.eventsService.getEvents()
    .subscribe(events=>{
      this.eventos = events;
      this.users = events[0].Users[0];
      console.log(this.users);
    })
  }

}
