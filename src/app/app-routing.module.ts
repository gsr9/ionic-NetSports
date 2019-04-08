import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/tabs/tabs.module#TabsPageModule' },
  // Podemos dejarlo así o redirigir a una página con un 404 Not Found
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
