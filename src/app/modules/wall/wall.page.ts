import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {PublicacionesService} from '../../services/publicaciones.service'
import {Story} from '../../shared/models/story.model';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';
import { Route } from 'src/app/shared/models/route.model';
import { RoutesService } from 'src/app/services/routes.service';
@Component({
  selector: 'app-wall',
  templateUrl: './wall.page.html',
  styleUrls: ['./wall.page.scss'],
})
export class WallPage implements OnInit {

  publications: Story[] = [];
  selectItem: Story;
  rutas: Route[];
  constructor(public service:PublicacionesService,private router:Router, private storage: Storage, private routeService: RoutesService) {

    service.getPublicaciones()
      .subscribe((publicaciones: Story[])=>{
        this.publications = publicaciones;
        this.storage.set('publis',this.publications.reverse())

      });

  }

  ionViewWillEnter(){
    this.routeService.getRutas()
    .subscribe((routes: Route[])=>{
      this.rutas = routes;
    })
  }

  public irCrear(){
        this.router.navigate(['/tabs/createPublication'])      
  }

  public goToPubli(id: string){

     this.router.navigate(['/tabs/publication'],{ queryParams: { id: id } })
  }

  public crearRuta(){
    this.router.navigate(['/tabs/crear-ruta'])      
  }

  irRuta(ruta){
    this.routeService.setShowRoute(ruta);
    this.router.navigate(['/tabs/show-ruta'])
  }

  ngOnInit() {
  }

}
