import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailPageComponent } from './company-detail-page.component';

const routes: Routes = [{
  path: '',
  component: CompanyDetailPageComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyDetailPageRoutingModule { }
