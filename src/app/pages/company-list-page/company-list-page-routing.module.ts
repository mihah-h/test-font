import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyListPageComponent } from './company-list-page.component';

const routes: Routes = [{
  path: '',
  component: CompanyListPageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyListPageRoutingModule { }
