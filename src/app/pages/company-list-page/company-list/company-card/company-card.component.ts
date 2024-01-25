import { Component, Input } from '@angular/core';
import { Company } from '../../../../core/services/companies.service';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrl: './company-card.component.scss'
})
export class CompanyCardComponent {
  @Input() public company!: Company;
}
