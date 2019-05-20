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

  name = '';
  level = '';
  description = '';
  imagen = '';

  historias: boolean;
  seguidores: boolean;
  seguidos: boolean;

  stories: Story[] = [];
  numStories: number;

  followers: any = ['Pavo', 'Jose', 'Maria', '50Cent', '2Pac', 'ElNiñoWey']
  numFollowers: number;

  following: any = ['Pavo', 'Jose', 'Maria', '50Cent', '2Pac', 'ElNiñoWey']
  numFollowing: number;


  constructor(private storage: Storage, private servicioPublicaciones: PublicacionesService, private router: Router) {

    this.historias = true
    this.seguidores = false
    this.seguidos = false

    this.numFollowing = this.following.length

    this.storage.remove('publi')
  }

  public segmentChanged(op: string) {
    if (op == "historias") {
      this.historias = true
      this.seguidores = false
      this.seguidos = false
    } else if (op == "seguidores") {
      this.historias = false
      this.seguidores = true
      this.seguidos = false
    } else {
      this.historias = false
      this.seguidores = false
      this.seguidos = true
    }
  }

  public goToPubli(id: string){

    this.router.navigate(['/tabs/publication'],{ queryParams: { id: id } })
 }

  ngOnInit() {
    this.storage.get('user').then((val: User) => {
      this.usuario = val;
      this.name = this.usuario.username;
      this.level = this.usuario.level;
      this.description = this.usuario.description;
      this.imagen = this.usuario.foto;
      this.followers = val.followers;
      this.numFollowers = this.followers.length;
      this.following = val.following;
      this.numFollowing = this.following.length;

      console.log(val.followers)

      this.servicioPublicaciones.getPublicacionesFromUsuario(this.name)
      .subscribe((publicaciones: Story[]) => {
        this.stories = publicaciones;
        this.numStories = this.stories.length
        //console.log(this.stories)
      });
    })
  }

}
