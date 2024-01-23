import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailPageComponent } from './company-detail-page.component';

const components = [
  CompanyDetailPageComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ]
})
export class CompanyDetailPageModule { }
