import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model'
import { Story } from 'src/app/shared/models/story.model'
import { PublicacionesService } from 'src/app/services/publicaciones.service'
import { UserService } from 'src/app/services/user.service'
import { Router, ActivatedRoute } from '@angular/router'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-other-profile',
  templateUrl: './other-profile.page.html',
  styleUrls: ['./other-profile.page.scss'],
})
export class OtherProfilePage implements OnInit {

  usuario: User;

  name = 'Prueba';
  level = '';
  description = '';
  imagen = '';

  historias: boolean;
  seguidores: boolean;
  seguidos: boolean;

  stories: Story[] = [];
  numStories: number = 0;

  followers: any = []
  numFollowers: number = 0;

  following: any = []
  numFollowing: number = 0;

  constructor(private publiService: PublicacionesService, private userService: UserService, private route: ActivatedRoute, private router: Router, private storage: Storage) { }

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

  public goToProfile(user: string){
    this.storage.get('user').then((val: User) => {
      var usu = val.username
      if(usu==this.name){
        this.router.navigate(['/tabs/profile'])
      }
      else{
        this.router.navigate(['/tabs/otherProfile'],{ queryParams: { user: user } })
      }
    })
  }

  public goToPubli(id: string){

    this.router.navigate(['/tabs/publication'],{ queryParams: { id: id } })
 }

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.user)
      .subscribe(params => {
        this.name = params.user

        this.publiService.getPublicacionesFromUsuario(this.name)
      .subscribe((publicaciones: Story[]) => {
        this.stories = publicaciones;
        this.numStories = this.stories.length
        //console.log(this.stories)
      });

      this.userService.getUsuarioNombre(this.name)
      .subscribe((val: User[]) => {
        console.log(val)
        if(val.length>=1){
          this.imagen = val[0].foto;
          this.description = val[0].description
          this.level = val[0].level
          if(val[0].followers){
            this.followers = val[0].followers
            this.numFollowers = this.followers.length
          }
          if(val[0].following){
            this.following = val[0].following
            this.numFollowing = this.following.length
          }
        }
        else {
          //redirect a otro sitio
        }
        //console.log(val)
      });
    });
  }

}
