import { Component, Input } from '@angular/core';

import { Company } from '../../../core/models/companies/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {
  @Input() public companyList: Company[] = [];

}
