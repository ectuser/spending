import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSortedCategoriesWithSpending, selectTotalByDates } from '../../../reducers/app-selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly categories$ = this.store.select(selectSortedCategoriesWithSpending);
  readonly total$ = this.store.select(selectTotalByDates);

  constructor(private store: Store) {}
}
