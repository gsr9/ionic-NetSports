import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/login/login.module#LoginPageModule'},
  { path: 'tabs', loadChildren: './modules/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginPageModule'},
  // Podemos dejarlo así o redirigir a una página con un 404 Not Found
  { path: '**', redirectTo: '', pathMatch: 'full' },  { path: 'show-event', loadChildren: './modules/show-event/show-event.module#ShowEventPageModule' }

  // { path: 'login', loadChildren: './modules/login/login.module#LoginPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
