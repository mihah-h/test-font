import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CompaniesService, Company } from '../../core/services/companies.service';

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
  ) {
  }



  public ngOnInit(): void {
    this.company$ = this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          const companyId = params['id'];
          return this.companiesService.getCompany(companyId);
        }),
        // takeUntil(this.destroy$)
      )
  }
}
