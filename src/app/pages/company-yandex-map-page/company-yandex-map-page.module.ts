import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyYandexMapPageComponent } from './company-yandex-map-page.component';

const components = [
  CompanyYandexMapPageComponent
];


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ]
})
export class CompanyYandexMapPageModule { }
