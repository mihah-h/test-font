import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../../core/services/companies.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent {
  @Input() public companyList: Company[] = []

}
