import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectedSortMethod } from '../../../../core/models/sort/selectedSortMethod.model'
import { SortMethod } from '../../../../core/models/sort/sortMethod.model';
import { Order } from '../../../../core/models/sort/order.model';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SortComponent implements OnInit{
  @Input() public sortMethods: SortMethod[] = [];
  @Input() public selectedSortMethod!: SelectedSortMethod;

  @Output() public changedSortMethod
    = new EventEmitter<SelectedSortMethod>();

  public ngOnInit() {
    if (!this.selectedSortMethod) {
      const firstSortMethod = this.sortMethods[0];
      this.selectedSortMethod = {
        value: firstSortMethod.value,
        order: !firstSortMethod.isOrdinal ? 'indefinite' : 'descending',
      };
    }
  }

  public isSelectedSortMethod(sortMethod: SortMethod) {
      return this.selectedSortMethod.value === sortMethod.value;
  }

  public isAscendingSorting(sortMethod: SortMethod): boolean {
      return sortMethod.isOrdinal && this.isSelectedSortMethod(sortMethod)
          && this.selectedSortMethod.order === 'ascending';
  }

  public isDescendingSorting(sortMethod: SortMethod): boolean {
      return sortMethod.isOrdinal && this.isSelectedSortMethod(sortMethod)
          && this.selectedSortMethod.order === 'descending';
  }

  public changSortMethod(sortMethod: SortMethod): void {
      if (!this.isSelectedSortMethod(sortMethod) || sortMethod.isOrdinal) {
          const newSortOrder: Order = !sortMethod.isOrdinal ? 'indefinite'
              : this.isDescendingSorting(sortMethod) ? 'ascending' : 'descending';
          this.selectedSortMethod = {
              value: sortMethod.value,
              order: newSortOrder,
          };

          this.changedSortMethod.next(this.selectedSortMethod);
      }
  }
}
