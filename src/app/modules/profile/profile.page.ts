import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {HistoriaProfileComponent} from 'src/app/historia-profile/historia-profile.component'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  nombre: string;
  descripcion: string;
  historias: boolean;
  seguidores: boolean;
  seguidos: boolean;

  stories: string[] = ['uno', 'dos', 'tres','cuatro','cinco'];

  numStories: number;


  constructor(private storage: Storage) { 
    this.nombre = 'Paco';
    this.descripcion = 'Pues esta sería la descripción de Paco. Preparado pero no mucho.'
    this.historias = true
    this.seguidores = false
    this.seguidos = false

    this.numStories = this.stories.length
  }

  public segmentChanged(op: string){
    console.log(op)
    if(op=="historias"){
      this.historias = true
      this.seguidores = false
      this.seguidos = false
    } else if (op=="seguidores"){
      this.historias = false
      this.seguidores = true
      this.seguidos = false
    } else {
      this.historias = false
      this.seguidores = false
      this.seguidos = true
    }

  }

  ngOnInit() {
  }

}
