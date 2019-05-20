import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', loadChildren: './modules/login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './modules/tabs/tabs.module#TabsPageModule', canActivate: [AuthGuardService] },
  { path: 'login', loadChildren: './modules/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './modules/register/register.module#RegisterPageModule' },
  { path: 'forgotpass', loadChildren: './modules/forgotpass/forgotpass.module#ForgotpassPageModule' },
  // Podemos dejarlo así o redirigir a una página con un 404 Not Found
  { path: 'show-event', loadChildren: './modules/show-event/show-event.module#ShowEventPageModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' },  { path: 'crear-ruta', loadChildren: './modules/crear-ruta/crear-ruta.module#CrearRutaPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
