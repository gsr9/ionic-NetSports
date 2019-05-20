import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PublicacionesService } from 'src/app/services/publicaciones.service'
import { UserService } from 'src/app/services/user.service'
import { Story } from 'src/app/shared/models/story.model'
import { Router, ActivatedRoute } from '@angular/router'
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


  constructor(private storage: Storage, private servicioPublicaciones: PublicacionesService,private service: UserService, private router: Router, private route: ActivatedRoute) {

    this.historias = true
    this.seguidores = false
    this.seguidos = false

    this.numFollowing = this.following.length

    

    //this.storage.remove('publi')
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

 public goToProfile(user: string){

  console.log('Route a ' + user)

  this.router.navigate(['/tabs/otherProfile'],{ queryParams: { user: user } })
  console.log('ADIOS')
}

  ngOnInit() {

    this.route.queryParams
      .filter(params => params.user)
      .subscribe(params => {
        console.log(params)
    });

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
