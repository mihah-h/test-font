import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { CompaniesService } from './core/services/companies.service';
import { API_URL } from './provider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    CompaniesService,
    { provide: API_URL, useValue: 'https://random-data-api.com/api/company/random_company?size=100' }
  ]
})
export class AppComponent {

}
