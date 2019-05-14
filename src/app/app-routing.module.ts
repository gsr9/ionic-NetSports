import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './modules/login/login.module#LoginPageModule'},
  { path: 'tabs', loadChildren: './modules/tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './modules/login/login.module#LoginPageModule'},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
