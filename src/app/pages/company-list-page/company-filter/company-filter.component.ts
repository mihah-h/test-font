import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

import { CompaniesService } from '../../../core/services/companies.service';
import { SelectOption } from '../../../core/models/filter/selectOption';
import { FilterService } from '../../../core/services/filter.service';
import { FilterParameters } from '../../../core/models/filter/filterParameters';

@Component({
  selector: 'app-company-filter',
  templateUrl: './company-filter.component.html',
  styleUrl: './company-filter.component.scss',
})
export class CompanyFilterComponent implements OnInit {
  public typesList: SelectOption[] = [];
  public industryList: SelectOption[] = [];

  private destroyRef = inject(DestroyRef);

  constructor(
    public companiesService: CompaniesService,
    private filterService: FilterService
  ) {}

  public ngOnInit() {
    this.fillOptions();
  }

  public onChangedFilterParameters(filterParameters: FilterParameters) {
    this.filterService.changeFilterParameter(filterParameters);
  }

  private fillOptions() {
    this.companiesService.companyTypesList$.pipe(
      tap((typesList) =>
        this.typesList = [{ id: typesList.length, value: 'Any' }, ...typesList]),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();

    this.companiesService.companyIndustryList$.pipe(
      tap((industryList) =>
        this.industryList = [{ id: industryList.length, value: 'Any' }, ...industryList]),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }
}
