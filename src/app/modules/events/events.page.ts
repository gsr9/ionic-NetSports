import { EventsService } from 'src/app/services/events.service';
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Event } from 'src/app/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  eventos: Event[] = [];
  pruebas: Event[] = [];
  searchedEventos: Event[] = [];
  users :String;
  showFilter = true;
  selectedSport: String;
  selectedDate: string;
  filtro: Boolean[] = [false,false,false,false];
  encontradosfiltro: Boolean[] =[false,false,false,false];
  selectedUser: string;
  selectedLocation: string;
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

  filtrar(selectedSport: string, selectedDate: string, selectedUser: string, selectedLocation: string){
    if(this.showFilter){
      //buscamos los datos del filtro
      this.getEvento(selectedSport, selectedDate, selectedUser, selectedLocation);
    }else{
      //reseteamos el filtro y lo mostramos
      this.selectedSport = null;
      this.selectedDate = null;
      this.selectedUser = null;
      this.selectedLocation = null;
      this.showFilter = true;
      this.searchedEventos = [];
    }
  }
  getEvento(selectedSport: string, selectedDate: string, selectedUser: string, selectedLocation: string){
    /*this.eventsService.prueba()
    .subscribe((prueba: Event[]) =>{
      this.pruebas = prueba
      console.log(this.pruebas)
    });*/
    this.eventsService.getEvents()
    .subscribe((events: Event[])=>{
      this.eventos = events;
      //this.users = events[0].Users[0];
      console.log(this.eventos);
    
      if(selectedSport){
        this.selectedSport = selectedSport;
        this.filtro[0] = true;
      }
      
      //convertir de ISO 8601 a dia/mes/año
      if(selectedDate){
        this.selectedDate = formatDate(selectedDate, 'dd/MM/yyyy', 'en-US');
        this.filtro[1] = true;
      }

      if(selectedUser){
        this.selectedUser = selectedUser.toLowerCase();
        this.filtro[2] = true;
      }

      if(selectedLocation){
        this.selectedLocation = selectedLocation.toLowerCase();
        this.filtro[3] = true;
      }

      console.log(this.eventos);

      for(const evento of this.eventos){
        if(evento.deporte == this.selectedSport){
          this.encontradosfiltro[0] = true;
        }
        if(evento.fecha == this.selectedDate){
          this.encontradosfiltro[1] = true;
        }
        
        if(evento.creador.toLowerCase() == this.selectedUser){
          this.encontradosfiltro[2] = true;
        }
        if(evento.lugar.toLowerCase() == this.selectedLocation){
          this.encontradosfiltro[3] = true;
        }
        if(this.compararFiltros(this.filtro, this.encontradosfiltro)){
          this.searchedEventos.push(evento);
        }

        this.encontradosfiltro = [false,false,false,false];
      }

      //console.log(this.searchedEventos)
      this.filtro = [false,false,false,false];
      this.showFilter = false;
    })
  }

  irA(evento){
    this.eventsService.setShowEvent(evento);
    this.router.navigate(['/tabs/show-event'])
  }

  compararFiltros(filtro1: Boolean[], filtro2: Boolean[]){
    var iguales: boolean = true;
    for(var i=0; i<=filtro1.length;i++){
      if(filtro1[i] != filtro2[i]){
        iguales = false;
      }
    }

    return iguales;
  }
}
