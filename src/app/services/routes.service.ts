import { Injectable } from '@angular/core';
import { Route } from 'src/app/shared/models/route.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  showRoute: Route;

  constructor(public afDB: AngularFireDatabase) { }

  public getRutas(){
    return this.afDB.list<Route>('/rutas').snapshotChanges()
    .pipe(map(items => {           // <== new way of chaining
      return items.map(a => {
        const data = a.payload.val();
        const key = a.payload.key;
        return {key, ...data};           // or {key, ...data} in case data is Obj
      });
    }));
  }

  /*public createRuta(tit: string, fec: string, des: string,crea: string,ini: string[], fin: string[]){
    return this.afDB.database.ref('/rutas').push({titulo: tit, fecha: fec, descripcion: des,creador: crea, inicio: ini, final: fin})
  }*/

  public createRuta(ruta: Route){
    return this.afDB.database.ref('/rutas').push(ruta);
  }

  public setShowRoute(route: Route){
    this.showRoute = route;
  }

  public getShowRoute(){
    return this.showRoute;
  }
}
