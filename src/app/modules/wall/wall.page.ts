import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {PublicacionesService} from '../../services/publicaciones.service'
import {Story} from '../../shared/models/story.model';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.page.html',
  styleUrls: ['./wall.page.scss'],
})
export class WallPage implements OnInit {

  publications: Story[] = [];
  selectItem: Story;
  constructor(public service:PublicacionesService,private router:Router, private storage: Storage) {

    service.getPublicaciones()
      .subscribe((publicaciones: Story[])=>{
        this.publications = publicaciones;
        this.storage.set('publis',this.publications)

      });
  }

  public goToPubli(id: string){

     this.router.navigate(['/tabs/publication'],{ queryParams: { id: id } })
  }

  ngOnInit() {
  }

}
