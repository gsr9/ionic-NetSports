import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'wall',
        children: [
          {
            path: '',
            loadChildren: '../wall/wall.module#WallPageModule'
          }
        ]
      },
      {
        path: 'publication',
        children: [
          {
            path: '',
            loadChildren: '../publication/publication.module#PublicationPageModule'
          }
        ]
      },
      {
        path: 'contacts',
        children: [
          {
            path: '',
            loadChildren: '../contacts/contacts.module#ContactsPageModule'
          }
        ]
      },
      {
        path: 'createPublication',
        children: [
          {
            path: '',
            loadChildren: '../create-publication/create-publication.module#CreatePublicationPageModule'
          }
        ]
      },
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: '../events/events.module#EventsPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: '../profile/profile.module#ProfilePageModule'
          }
        ]
      },
      { path: 'contactos',
      children: [
        {
          path: '',
          loadChildren: '../contacts/contacts.module#ContactsPageModule'
        }
      ]},

      {
        path: 'show-event',
        children: [
          {
            path: '',
            loadChildren: '../show-event/show-event.module#ShowEventPageModule'
          }
        ]
      },
      {
        path: 'crear-ruta',
        children: [
          {
            path: '',
            loadChildren: '../crear-ruta/crear-ruta.module#CrearRutaPageModule'
          }
        ]
      },
      {
        path: 'show-ruta',
        children: [
          {
            path: '',
            loadChildren: '../show-ruta/show-ruta.module#ShowRutaPageModule'
          }
        ]
      },
      {  
        path: 'otherProfile',
        children: [
          {
            path: '',
            loadChildren: '../other-profile/other-profile.module#OtherProfilePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/wall',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: '',
    redirectTo: '/tabs/wall',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
