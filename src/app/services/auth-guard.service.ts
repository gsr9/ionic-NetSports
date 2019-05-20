import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from '../shared/models/User.model';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private storage: Storage, private router: Router) { }

    async canActivate() {
        // Limpiar el storage para probar
        // this.storage.clear();
        const res = await  this.storage.get('user').then((user: User) => {
            if (user) {
                console.log(user)
                return true;
            }
            this.router.navigate(['/login']);
            return false;
        });
        return res;
    }
}
