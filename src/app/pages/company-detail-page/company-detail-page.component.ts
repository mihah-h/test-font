import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

import { CompaniesService } from '../../core/services/companies.service';
import { Company } from '../../core/models/companies/company';

@Component({
  selector: 'app-company-detail-page',
  templateUrl: './company-detail-page.component.html',
  styleUrl: './company-detail-page.component.scss'
})
export class CompanyDetailPageComponent implements OnInit {
  public company$!: Observable<Company | undefined>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private companiesService: CompaniesService,
  ) {}



  public ngOnInit(): void {
    this.company$ = this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          const companyId = params['id'];
          return this.companiesService.getCompany(companyId);
        }),
      )
  }
}
