import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SelectedSortMethod } from '../models/sort/selectedSortMethod.model';
@Injectable()
export class SortService {
  private defaultSortParameter: SelectedSortMethod = {
    value: 'business_name',
    order: 'descending'
  };

  constructor() {}

  private sortingParameter$
    = new BehaviorSubject<SelectedSortMethod>(this.defaultSortParameter);

  get changingSortingParameter$() {
    return this.sortingParameter$.asObservable();
  };

  changeSortingParameter(sortingParameter: SelectedSortMethod) {
    this.sortingParameter$.next(sortingParameter);
  };
}
