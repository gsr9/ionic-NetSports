import { EventsService } from 'src/app/services/events.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventos = [];
  searchedEventos = [];
  users :String;
  showFilter = true;
  selectedSport: String;
  selectedDate: string;
  constructor(public eventsService: EventsService) { }

  ngOnInit() {
  }

  /*anyadirEvento(){
    let titulo: String = '¿Partido de tenis?';
    let fecha: String = '03/11/2019';
    let deporte: String = 'Tenis';
    let descripcion: String = '¿Un uno pa uno sin camiseta?';
    let users: String[] = ['Jonay', 'Guille'];
    let lugar: String = 'Elche';
    this.eventsService.createEvent(titulo, fecha, deporte,descripcion, users);
    this.eventsService.getEvents()
    .subscribe(events=>{
      this.eventos = events;
      console.log(this.eventos);
    })
    
  }*/

  filtrar(selectedSport: String, selectedDate: string){
    if(this.showFilter){
      this.getEvento(selectedSport, selectedDate);
    }else{
      this.showFilter = true;
      this.searchedEventos = [];
    }
  }
  getEvento(selectedSport: String, selectedDate: string){
    this.eventsService.getEvents()
    .subscribe(events=>{
      this.eventos = events;
      //this.users = events[0].Users[0];
      //console.log(this.eventos);
    
    
      this.selectedSport = selectedSport;
      //convertir de ISO 8601 a dia/mes/año
      if(selectedDate){
        this.selectedDate = formatDate(selectedDate, 'dd/MM/yyyy', 'en-US');
      }

      console.log(this.eventos);

      //Buscamos coincidencias
      for (const evento of this.eventos) {
        if(selectedSport){
          if(evento.Deporte == this.selectedSport){
            if(selectedDate){
              if(this.selectedDate == evento.Fecha){
                this.searchedEventos.push(evento);
              }
            }else{
              this.searchedEventos.push(evento);
            }
          }
        }else{
          if(selectedDate){
            if(this.selectedDate == evento.Fecha){
              this.searchedEventos.push(evento);
            }
          }
        }
      }

      this.showFilter = false;
    })
  }
}
