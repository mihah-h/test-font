import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListPageComponent } from './company-list-page.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyCardComponent } from './company-list/company-card/company-card.component';
import { CompanyListPageRoutingModule } from './company-list-page-routing.module';
import { CompanySortComponent } from './company-sort/company-sort.component';
import { CompanyFilterComponent } from './company-filter/company-filter.component';
import { SortComponent } from './company-sort/sort/sort.component';
import { SortMethodComponent } from './company-sort/sort/sort-method/sort-method.component';
import { FilterComponent } from './company-filter/filter/filter.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../../theme/components/card/card.component';

const components = [
  CompanyListPageComponent,
  CompanyListComponent,
  CompanyCardComponent,
  CompanySortComponent,
  CompanyFilterComponent,
  SortComponent,
  SortMethodComponent,
  FilterComponent
];


@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    CompanyListPageRoutingModule,
    CardComponent,
    ReactiveFormsModule,
  ],


})
export class CompanyListPageModule { }
