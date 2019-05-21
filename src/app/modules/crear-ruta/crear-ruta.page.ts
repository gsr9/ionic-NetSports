import { Component, OnInit } from '@angular/core';
import { Route } from '../../shared/models/route.model';
import { FormBuilder, Validators } from '@angular/forms';
import { RoutesService } from 'src/app/services/routes.service';
import { formatDate } from '@angular/common';
import { Storage } from '@ionic/storage';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-crear-ruta',
  templateUrl: './crear-ruta.page.html',
  styleUrls: ['./crear-ruta.page.scss'],
})
export class CrearRutaPage implements OnInit {

  public lat: Number = 38.382417;
  public lng: Number = -0.5109617;
  
  public origin: any;
  public destination: any;

  selectedTitulo: string;
  selectedDescripcion: string;
  user: User;
  fecha: string;
  email: string;
  ruta: Route;
  /*onLoginForm = this.fb.group({
    'titulo': ['', Validators.required, Validators.email],
    'descripcion': ['', Validators.required]
  });*/

  constructor(private fb: FormBuilder, private routesService: RoutesService, private storage: Storage) { 
    this.storage.get('user').then((val: User) => {
      this.user = val;
      this.email = val.email;
      });
  }

  ngOnInit() {
    this.getDirection();
  }

  getDirection() {
    this.origin = { lat: 38.382417, lng: -0.5109617 };
    this.destination = { lat: 38.395851, lng: -0.5139535 };

  }

  crearRuta(titulo: string, descripcion: string){
    this.fecha = formatDate(new Date().toISOString(), 'dd/MM/yyyy', 'en-US');
    this.ruta = new Route(titulo,descripcion, this.email, ["38.382417","-0.5109617"], ["38.395851","-0.5139535"], this.fecha);
    this.routesService.setShowRoute(this.ruta);
    this.routesService.createRuta(this.ruta);
  }

}
