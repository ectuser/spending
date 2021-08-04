import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectAllCategories } from '../../../reducers/categories/categories.selectors';

@Component({
  selector: 'app-add-spending',
  templateUrl: './add-spending.component.html',
  styleUrls: ['./add-spending.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSpendingComponent {
  readonly categories$ = this.store.select(selectAllCategories);

  form = new FormGroup({
    selectedCategoryId: new FormControl('', Validators.required),
    amount: new FormControl(0, Validators.required),
  });

  constructor(private store: Store) {}
}
