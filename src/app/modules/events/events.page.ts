import { EventsService } from 'src/app/services/events.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Event } from 'src/app/event';
import { ShowEventPage } from 'src/app/modules/show-event/show-event.page'
import { Router } from '@angular/router';



@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventos: Event[] = [];
  searchedEventos: Event[] = [];
  users :String;
  showFilter = true;
  selectedSport: String;
  selectedDate: string;
  constructor(public eventsService: EventsService, private router: Router) { }

  ngOnInit() {
  }

  /*anyadirEvento(){
    let titulo: string = '¿Jugamos una pachanga?';
    let fecha: string = '03/11/2019';
    let deporte: string = 'Fútbol';
    let descripcion: string = '¿A quien le apetece jugar unas pachangas de fútbol este viernes?';
    let creador: string = 'gsr9@alu.ua.es';
    let latitud: string = '38.2766427';
    let longitud: string = '-0.6695075';
    let users: string[] = ['prueba@prueba.com', 'gcs2@gmail.com'];
    let lugar: string = 'Elche';
    this.eventsService.createEvent(titulo, fecha, deporte,descripcion, creador, latitud, longitud, users, lugar);
    this.eventsService.getEvents()
    .subscribe((events: Event[])=>{
      this.eventos = events;
      console.log(this.eventos);
    })
    
  }*/

  filtrar(selectedSport: string, selectedDate: string){
    if(this.showFilter){
      //buscamos los datos del filtro
      this.getEvento(selectedSport, selectedDate);
    }else{
      //reseteamos el filtro y lo mostramos
      this.selectedSport = null;
      this.selectedDate = null;
      this.showFilter = true;
      this.searchedEventos = [];
    }
  }
  getEvento(selectedSport: string, selectedDate: string){
    this.eventsService.getEvents()
    .subscribe((events: Event[])=>{
      this.eventos = events;
      //this.users = events[0].Users[0];
     // console.log(this.eventos);
    
    
      this.selectedSport = selectedSport;
      //convertir de ISO 8601 a dia/mes/año
      if(selectedDate){
        this.selectedDate = formatDate(selectedDate, 'dd/MM/yyyy', 'en-US');
      }

      console.log(this.eventos);
      //Buscamos coincidencias
      for (const evento of this.eventos) { 
        if(selectedSport){
          if(evento.deporte == this.selectedSport){
            if(selectedDate){
              if(this.selectedDate == evento.fecha){
                this.searchedEventos.push(evento);
              }
            }else{
              this.searchedEventos.push(evento);
            }
          }
        }else{
          if(selectedDate){
            if(this.selectedDate == evento.fecha){
              this.searchedEventos.push(evento);
            }
          }
        }
      }

      this.showFilter = false;
    })
  }

  irA(evento){
    console.log(evento)
    this.router.navigate(['/tabs/show-event', evento])
  }
}
