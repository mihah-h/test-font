import { Component, OnInit } from '@angular/core';
import { CompaniesService, Company } from '../../core/services/companies.service';


@Component({
  selector: 'app-company-list-page',
  templateUrl: './company-list-page.component.html',
  styleUrl: './company-list-page.component.scss'
})
export class CompanyListPageComponent implements OnInit{
  public companyList: Company[] = []
  constructor(private companiesService: CompaniesService) {
  }

  public ngOnInit() {
    this.companiesService.getCompanyList()
      .subscribe((companyList) => this.companyList = companyList)
  }
}
