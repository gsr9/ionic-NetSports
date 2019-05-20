import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/event';
import { EventsService } from 'src/app/services/events.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'app-show-event',
  templateUrl: './show-event.page.html',
  styleUrls: ['./show-event.page.scss'],
})
export class ShowEventPage implements OnInit {

  event: Event;
  name: string;
  email: string;
  latitud: number;
  longitud: number;
  user: User;
  encontrado = false;
  borrar: number;

  constructor(private router: Router,private eventsService: EventsService, private storage: Storage) { 
    this.event = this.eventsService.getShowEvent();
  }

  ionViewWillEnter(){
    this.event = this.eventsService.getShowEvent();
    this.encontrado = false;
    this.storage.get('user').then((val: User) => {
      this.user = val;
      this.name = val.username;
      this.email = val.email;
      this.latitud = parseFloat(this.event.latitud);
      this.longitud = parseFloat(this.event.longitud);
      if(!this.event){
        this.router.navigate(['/tabs/events'])
      }
      this.comprobarApuntado();
      });
  }

  ngOnInit() {
  }

  comprobarApuntado(){
    for (const usuario of this.event.users) {
      if(usuario == this.email){
        this.encontrado = true;
      }
    }
  }

  apuntarUser(){
    this.event.users.push(this.email);
    this.encontrado = true;
    this.eventsService.updateEvent(this.event);
  }

  desapuntarUser(){
    for(var i=0; i<= this.event.users.length; i++){
      if(this.event.users[i] == this.email){
        this.borrar = i;
      }
    }
    if(this.borrar){
      this.event.users.splice(this.borrar,1);
      this.encontrado = false;
      this.eventsService.updateEvent(this.event);
    }
  }

  //<img src="https://www.muypymes.com/wp-content/uploads/2018/03/googlemaps-googledevelopers1-660x330.png"/>

}
