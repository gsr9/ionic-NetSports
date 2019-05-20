import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/login/login.module#LoginPageModule'},
  { path: 'tabs', loadChildren: './modules/tabs/tabs.module#TabsPageModule'},
  { path: 'login', loadChildren: './modules/login/login.module#LoginPageModule'},
  { path: 'register', loadChildren: './modules/register/register.module#RegisterPageModule'},
  // Podemos dejarlo así o redirigir a una página con un 404 Not Found
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // { path: 'login', loadChildren: './modules/login/login.module#LoginPageModule' }
  {path: 'forgotpass', loadChildren: './modules/forgotpass/forgotpass.module#ForgotpassPageModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'show-event', loadChildren: './modules/show-event/show-event.module#ShowEventPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
