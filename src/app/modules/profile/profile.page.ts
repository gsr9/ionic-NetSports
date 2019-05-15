import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  nombre: string;
  descripcion: string;

  constructor(private storage: Storage) { 
    this.nombre = 'Paco';
    this.descripcion = 'Pues esta sería la descripción de Paco. Preparado pero no mucho.'
  }

  public segmentChanged(op: string){
    console.log(op)
  }

  ngOnInit() {
  }

}
