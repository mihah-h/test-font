import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyYandexMapPageComponent } from './company-yandex-map-page.component';

const routes: Routes = [{
  path: '',
  component: CompanyYandexMapPageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyYandexMapPageRoutingModule { }
