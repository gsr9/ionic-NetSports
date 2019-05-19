import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PublicacionesService } from 'src/app/services/publicaciones.service'
import { Story } from 'src/app/shared/models/story.model'
import { Router } from '@angular/router'
import { User } from 'src/app/shared/models/user.model'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  usuario: User;

  historias: boolean;
  seguidores: boolean;
  seguidos: boolean;

  stories: Story[] = [];

  numStories: number;


  constructor(private storage: Storage, private servicioPublicaciones: PublicacionesService, private router: Router) { 
    this.storage.get('user').then((val)=>{
      this.usuario = val

      servicioPublicaciones.getPublicaciones()
      .subscribe((publicaciones: Story[])=>{
        this.stories = publicaciones;
        this.numStories = this.stories.length
        //console.log(this.stories)
      });
    })
    this.historias = true
    this.seguidores = false
    this.seguidos = false

    this.storage.remove('publi')
  }

  public segmentChanged(op: string){
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

  public goToPubli(item: Story){
    this.storage.set('publi',item)
    console.log(item)
    this.router.navigateByUrl('/tabs/publication')
  }

  ngOnInit() {

  }

}
