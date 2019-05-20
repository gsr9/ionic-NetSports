import { Component, OnInit,Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Story} from '../../shared/models/story.model'
import { ActivatedRoute } from '@angular/router';
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
  comments: string[] = ["Me encanta :)","Ya tenía ganas de algo así","Para cuando otra???"]


  constructor(private storage: Storage, private route: ActivatedRoute) {}

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

           this.usuario = this.publication.usuario;
           this.titulo = this.publication.titulo;
           this.descripcion = this.publication.descripcion;
         });
      });


  }


}
