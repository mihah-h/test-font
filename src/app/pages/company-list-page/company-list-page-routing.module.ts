import { NgModule } from '@angular/core';
import { CompanyListPageComponent } from './company-list-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: CompanyListPageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyListPageRoutingModule { }
