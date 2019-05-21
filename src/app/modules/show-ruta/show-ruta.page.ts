import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User.model';
import { RoutesService } from './../../services/routes.service';
import { Component, OnInit } from '@angular/core';
import { Route } from 'src/app/shared/models/route.model';


@Component({
  selector: 'app-show-ruta',
  templateUrl: './show-ruta.page.html',
  styleUrls: ['./show-ruta.page.scss'],
})
export class ShowRutaPage implements OnInit {

  ruta: Route;
  usuario: User;
  public origin: any;
  public destination: any;
  nombre: string;
  users: User[];
  lat: Number;
  lng: Number;
  imagen: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  comments: string[] = ["Tiene muy buena pinta. Me la apunto!","Pero no será peligrosa? :(","Es la misma que hice yo ayer! Está genial!"]
  gustar = false;

  
  
  constructor(private routesService: RoutesService, private userService: UserService) { 
    this.ruta = routesService.getShowRoute();
  }

  ionViewWillEnter(){
    this.origin = [];
    this.destination = [];
    this.ruta = this.routesService.getShowRoute();
    this.titulo = this.ruta.titulo;
    this.descripcion = this.ruta.descripcion;
    this.fecha = this.ruta.fecha;
    this.origin = {lat: parseFloat(this.ruta.inicio[0]), lng: parseFloat(this.ruta.inicio[1])};
    this.destination = {lat: parseFloat(this.ruta.final[0]), lng: parseFloat(this.ruta.final[1])};
    this.lat = parseFloat(this.ruta.inicio[0]);
    this.lng = parseFloat(this.ruta.inicio[1]);
    this.userService.getUserByEmail(this.ruta.creador)
    .subscribe((actions)=>{
      
      this.usuario = actions[0].payload.val() as User;
      const key = actions[0].key;
      this.imagen = this.usuario.foto;
      this.nombre = this.usuario.username;
    })


  }

  ngOnInit() {
  }

  meGusta(){
    this.gustar = true;
  }

  nomeGusta(){
    this.gustar = false;
  }

}
