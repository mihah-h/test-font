import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { SelectOption } from '../../../../core/models/filter/selectOption';
import { FilterParameters } from '../../../../core/models/filter/filterParameters';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit{
  filterForm!: FormGroup;

  @Input() public companyTypesList: SelectOption[] = [];
  @Input() public companyIndustryList: SelectOption[] = [];

  @Output() public changedFilterParameters = new EventEmitter<FilterParameters>();

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.filterForm = new FormGroup(
      {
        business_name: new FormControl(''),
        type: new FormControl('Any'),
        industry: new FormControl('Any'),
      }
    );

    this.filterForm.valueChanges.pipe(
      debounceTime(500),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe((value) => this.changedFilterParameters.next(value));

  }
}
