import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListPageComponent } from './company-list-page.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyItemComponent } from './company-list/company-item/company-item.component';

const components = [
  CompanyListPageComponent,
  CompanyListComponent,
  CompanyItemComponent
];


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ]
})
export class CompanyListPageModule { }
