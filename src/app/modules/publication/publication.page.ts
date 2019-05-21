import { Component, OnInit,Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Story} from '../../shared/models/story.model'
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
})
export class PublicationPage implements OnInit {

  publication: Story;
  orderObj: any;
  usuario: string = "";
  titulo: string = "";
  descripcion: string="";
  imagen: string="";
  comments: string[] = ["Me encanta :)","Ya tenía ganas de algo así","Para cuando otra???"]


  constructor(private storage: Storage, private route: ActivatedRoute, private service: UserService) {}

  ngOnInit() {
    this.route.queryParams
      .filter(params => params.id)
      .subscribe(params => {
         // {order: "popular"}

        this.storage.get('publis').then((val) => {

          Object.keys(val).forEach(key=> {

          //  console.log(val)
            if(key == params.id){
              console.log(val[key])
                this.publication = val[key];
                //console.log(val)
            }
         });

         this.service.getUsuarioNombre(this.publication.usuario)
           .subscribe((val: User[]) => {
             if(val.length>=1) this.imagen = val[0].foto;
             else this.imagen = "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
             //console.log(val)
           });
           this.usuario = this.publication.usuario;
           this.titulo = this.publication.titulo;
           this.descripcion = this.publication.descripcion;
         });
      });


  }


}
