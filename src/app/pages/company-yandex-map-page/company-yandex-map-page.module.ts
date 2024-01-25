import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyYandexMapPageComponent } from './company-yandex-map-page.component';
import { CompanyYandexMapPageRoutingModule } from './company-yandex-map-page-routing.module';

const components = [
  CompanyYandexMapPageComponent
];


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    CompanyYandexMapPageRoutingModule
  ]
})
export class CompanyYandexMapPageModule { }
