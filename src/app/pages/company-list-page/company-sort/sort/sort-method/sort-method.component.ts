import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CursorType } from '../../../../../core/models/sort/cursorType';

@Component({
  selector: 'app-sort-method',
  templateUrl: './sort-method.component.html',
  styleUrls: ['./sort-method.component.scss'],
})
export class SortMethodComponent implements OnChanges {
  public cursorType: CursorType = 'default';

  @Input() public name!: string;
  @Input() public isOrdinal = false;
  @Input() public isSelect = false;
  @Input() public isAscendingSorting = false;
  @Input() public isDescendingSorting = false;

  public ngOnChanges(changes: SimpleChanges) {
    this.cursorType = this.isSelect && !this.isOrdinal ? 'default' : 'pointer';
  }
}
