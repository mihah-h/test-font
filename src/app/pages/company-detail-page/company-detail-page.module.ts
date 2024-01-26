import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyDetailPageComponent } from './company-detail-page.component';

import { CompanyDetailPageRoutingModule } from './company-detail-page-routing.module';
import { CardComponent } from '../../theme/components/card/card.component';

const components = [
  CompanyDetailPageComponent
];

const imports = [
  CommonModule,
  CompanyDetailPageRoutingModule,
  CardComponent,
]

@NgModule({
  declarations: [...components],
  imports: [...imports],
})
export class CompanyDetailPageModule { }
