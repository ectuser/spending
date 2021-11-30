import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tuiIconMoreVer } from '@taiga-ui/icons';
import { selectSortedCategoriesWithSpending } from '../../../reducers/app-selectors';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly menuIcon = tuiIconMoreVer;
  readonly categories$ = this.store.select(selectSortedCategoriesWithSpending);

  constructor(private store: Store) {}
}
