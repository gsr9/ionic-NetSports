import { Component, OnInit,Input } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Story} from '../../shared/models/story.model'

@Component({
  selector: 'app-publication',
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
})
export class PublicationPage implements OnInit {

 publication: Story;

  usuario: string = "";
  titulo: string = "";
  descripcion: string="";


  constructor(private storage: Storage) {

    storage.get('publi').then((val) => {

      this.usuario = val.usuario;
      this.titulo = val.titulo;
      this.descripcion = val.descripcion;
    });
  }

  ngOnInit() {

  }


}
