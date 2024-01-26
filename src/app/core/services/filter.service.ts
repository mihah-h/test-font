import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { FilterParameters } from '../models/filter/filterParameters';
@Injectable()
export class FilterService {
  private defaultFilterParameters: FilterParameters = {
    business_name: '',
    type: 'Any',
    industry: 'Any'
  };

  constructor() {}

  private filterParameter$
    = new BehaviorSubject<FilterParameters>(this.defaultFilterParameters);

  get changingFilterParameters$() {
    return this.filterParameter$.asObservable();
  };

  changeFilterParameter(filterParameter: FilterParameters) {
    this.filterParameter$.next(filterParameter);
  };

}
