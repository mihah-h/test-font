import { Injectable } from '@angular/core';

import { map, Observable, of, shareReplay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../../app.component';
import { CompanyListPageModule } from '../../pages/company-list-page/company-list-page.module';


export type Company = {
  id: number;
  uid: string;
  business_name: string;
  suffix: string;
  industry: string;
  catch_phrase: string;
  buzzword: string;
  bs_company_statement: string;
  employee_identification_number: string;
  duns_number: string;
  logo: string;
  type: string;
  phone_number: string;
  full_address: string;
  latitude: number;
  longitude: number;
};

@Injectable()
export class CompaniesService {
  constructor(private http: HttpClient) {
  }

  private text = '1'
  private companies: Company[] = [];

  public getCompanyList() {
    if (this.companies.length !== 0) {
      return of(this.companies)
    }
    return this.http.get<Company[]>(
      'https://random-data-api.com/api/company/random_company?size=100').pipe(
        tap((response) => this.setCompanies(response))
    )
  }

  private setCompanies(response: Company[]) {
    this.companies = response;
  }

  public getCompany(companyId: string) {
    if (this.companies.length !== 0) {
      return of(this.companies.find((company) => company.uid === companyId));
    }
    return this.getCompanyList().pipe(map((companyList) => companyList[0]))
  }

}
