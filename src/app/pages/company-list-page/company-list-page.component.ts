import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, switchMap } from 'rxjs';

import { CompaniesService } from '../../core/services/companies.service';
import { SortService } from '../../core/services/sort.service';
import { Company } from '../../core/models/companies/company';
import { FilterService } from '../../core/services/filter.service';

@Component({
  selector: 'app-company-list-page',
  templateUrl: './company-list-page.component.html',
  styleUrl: './company-list-page.component.scss'
})
export class CompanyListPageComponent implements OnInit {
  public companyList: Company[] = [];

  private destroyRef = inject(DestroyRef);

  constructor(
    private companiesService: CompaniesService,
    private sortService: SortService,
    private filterService: FilterService,
  ) {}

  public ngOnInit() {
    combineLatest(
      this.sortService.changingSortingParameter$,
      this.filterService.changingFilterParameters$,
    ).pipe(
      switchMap(([selectedSortMethod, filterParameters]) =>
        this.companiesService.getCompanyList(selectedSortMethod, filterParameters)),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((companyList) => this.companyList = companyList);
  };
}
