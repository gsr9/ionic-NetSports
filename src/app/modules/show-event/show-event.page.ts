import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/event';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.page.html',
  styleUrls: ['./show-event.page.scss'],
})
export class ShowEventPage implements OnInit {

  event: Event;
  latitud: number;
  longitud: number;
  user: string = "paco@gmail.com";
  encontrado = false;
  borrar: number;

  constructor(private router: Router,public eventsService: EventsService) { 

  }

  ngOnInit() {
    this.event = this.eventsService.getShowEvent();
    this.latitud = parseFloat(this.event.latitud);
    this.longitud = parseFloat(this.event.longitud);
    if(!this.event){
      this.router.navigate(['/tabs/events'])
    }
    this.comprobarApuntado();
  }

  comprobarApuntado(){
    for (const usuario of this.event.users) {
      if(usuario == this.user){
        this.encontrado = true;
      }
    }
  }

  apuntarUser(){
    this.event.users.push(this.user);
    this.encontrado = true;
    console.log(this.event.users)
  }

  desapuntarUser(){
    for(var i=0; i<= this.event.users.length; i++){
      if(this.event.users[i] == this.user){
        this.borrar = i;
      }
    }
    if(this.borrar){
      this.event.users.splice(this.borrar,1);
      this.encontrado = false;
    }
    console.log(this.event.users)
  }

  //<img src="https://www.muypymes.com/wp-content/uploads/2018/03/googlemaps-googledevelopers1-660x330.png"/>

}
