import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyDetailPageComponent } from './company-detail-page.component';
import { CompanyDetailPageRoutingModule } from './company-detail-page-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../../theme/components/card/card.component';

const components = [
  CompanyDetailPageComponent
];

@NgModule({
  declarations: [...components],
    imports: [
        CommonModule,
        CompanyDetailPageRoutingModule,
        CardComponent,
    ],
})
export class CompanyDetailPageModule { }
