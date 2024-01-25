import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit{
  filterForm!: FormGroup;

  states = [
    {name: 'Arizona', abbrev: 'AZ'},
    {name: 'California', abbrev: 'CA'},
    {name: 'Colorado', abbrev: 'CO'},
    {name: 'New York', abbrev: 'NY'},
    {name: 'Pennsylvania', abbrev: 'PA'},
  ];

  ngOnInit(): void {
    this.filterForm = new FormGroup(
      {
        search: new FormControl('ffff'),
        type: new FormControl(this.states[0]),
        industry: new FormControl(''),
      }
    );

    // this.filterParamsForm.valueChanges.pipe(
    //   startWith(this.filteringParamsForm.value),
    //   debounceTime(600),
    //   switchMap((formValue: FilteringParams) => this.updateQueryParams(formValue)),
    //   takeUntil(this.destroy$)
    // ).subscribe();
  }


}
