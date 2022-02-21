import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
          },
        ]
      },
      {
        path: 'promocoes',
        children: [
          {
            path: '',
            loadChildren: () => import('./promocoes/promocoes.module').then( m => m.PromocoesPageModule)
          },
        ]
      },
      {
        path: 'desejos',
        children: [
          {
            path: '',
            loadChildren: () => import('./desejos/desejos.module').then( m => m.DesejosPageModule)
          },
        ]
      },
      {
        path: 'comunidade',
        children: [
          {
            path: '',
            loadChildren: () => import('./comunidade/comunidade.module').then( m => m.ComunidadePageModule)
          },
        ]
      },
      {
        path: 'conta',
        children: [
          {
            path: '',
            loadChildren: () => import('./conta/conta.module').then( m => m.ContaPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/menu/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule { }