import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, switchMap, tap } from 'rxjs';

import { SelectOption } from '../models/filter/selectOption';
import { SelectedSortMethod } from '../models/sort/selectedSortMethod.model';
import { Company } from '../models/companies/company';
import { FilterParameters } from '../models/filter/filterParameters';
import { API_URL } from '../../provider';

@Injectable()
export class CompaniesService {
  constructor(
    private http: HttpClient,
    @Inject(API_URL) private apiUrl: string,
  ) {}

  private companies: Company[] = [];

  private defaultSortParameter: SelectedSortMethod = {
    value: 'business_name',
    order: 'descending'
  };
  private defaultFilterParameters: FilterParameters = {
    business_name: '',
    type: 'Any',
    industry: 'Any'
  };

  public getCompanyList(
    sortParameter: SelectedSortMethod = this.defaultSortParameter,
    filterParameters: FilterParameters = this.defaultFilterParameters
  ) {
    return this.companies.length !== 0
      ? this.companyListConversion(this.companies, sortParameter, filterParameters)
      : this.fetchCompanyList(sortParameter, filterParameters);
  };

  public getCompany(companyId: string) {
    return this.getCompanyList().pipe(
      map((company) =>
        company.find((company) => company.uid === companyId))
    );
  };

  public get companyTypesList$(): Observable<SelectOption[]> {
    return this.getCompanyList().pipe(
      map(companies =>
        Array.from(new Set(companies.map(company => company.type)))
          .map((companyType, index) =>
            ({ id: index, value: companyType }))
      )
    );
  };

  public get companyIndustryList$(): Observable<SelectOption[]> {
    return this.getCompanyList().pipe(
      map(companies =>
        Array.from(new Set(companies.map(company => company.industry)))
          .map((companyIndustry, index) =>
            ({ id: index, value: companyIndustry }))
      )
    );
  };

  private fetchCompanyList(
    sortParameter: SelectedSortMethod,
    filterParameters: FilterParameters
  ) {
    return this.http.get<Company[]>(
      this.apiUrl).pipe(
      tap((response) => this.setCompanies(response)),
      switchMap((companies) =>
        this.companyListConversion(companies, sortParameter, filterParameters))
    );
  }

  private companyListConversion(
    companies: Company[],
    sortParameter: SelectedSortMethod,
    filterParameters: FilterParameters
  ) {
    const sortedCompanies
      = this.sortCompanies(this.filterCompanies(companies, filterParameters), sortParameter);
    return of(sortedCompanies);
  }

  private sortCompanies(companies: Company[], sortParameter: SelectedSortMethod) {
    return companies.sort((companyA, companyB) => {
      const getValue = (company: Company) => {
        return sortParameter.value === 'type' ? company.type :
          sortParameter.value === 'industry' ? company.industry :
            company.business_name;
      };

      const comparisonValueA = getValue(companyA);
      const comparisonValueB = getValue(companyB);

      return sortParameter.order === 'descending'
        ? comparisonValueA.localeCompare(comparisonValueB)
        : comparisonValueB.localeCompare(comparisonValueA);
    });
  }

  private filterCompanies(companies: Company[],params: FilterParameters): Company[] {
    return companies.filter(company => {
      return (
        (params.type === 'Any' || company.type === params.type) &&
        (params.industry === 'Any' || company.industry === params.industry) &&
        (params.business_name === '' || company.business_name.toLowerCase()
          .includes(params.business_name.toLowerCase()))
      );
    });
  }

  private setCompanies(response: Company[]) {
    this.companies = response;
  }
}
