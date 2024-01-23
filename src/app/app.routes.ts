import { Routes } from '@angular/router';

import { LayoutComponent } from "./theme/layout/layout.component";

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        loadChildren: () => import('./pages/company-list-page/company-list-page.module')
          .then(m => m.CompanyListPageModule),
      },
      {
        path: 'detail/:id',
        loadChildren: () => import('./pages/company-detail-page/company-detail-page.module')
          .then(m => m.CompanyDetailPageModule),
      },
      {
        path: 'map',
        loadChildren: () => import('./pages/company-yandex-map-page/company-yandex-map-page.module')
          .then(m => m.CompanyYandexMapPageModule),
      }
    ]
  }
];
