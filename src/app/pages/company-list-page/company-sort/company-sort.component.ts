import { Component } from '@angular/core';

import { SortMethod } from '../../../core/models/sort/sortMethod.model';
import { SelectedSortMethod } from '../../../core/models/sort/selectedSortMethod.model';
import { SortService } from '../../../core/services/sort.service';

@Component({
  selector: 'app-company-sort',
  templateUrl: './company-sort.component.html',
  styleUrl: './company-sort.component.scss'
})
export class CompanySortComponent {
  constructor(
    private sortService: SortService
  ) {}

  public readonly sortMethods: SortMethod[] = [
    { id: 1, name: 'Имя', value: 'business_name', isOrdinal: true },
    { id: 2, name: 'Вид деятельности', value: 'industry', isOrdinal: true },
    { id: 3, name: 'Тип', value: 'type', isOrdinal: true },
  ]

  public onChangedSortMethod(selectedSortMethod: SelectedSortMethod) {
    this.sortService.changeSortingParameter(selectedSortMethod);
  }
}
