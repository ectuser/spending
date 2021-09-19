import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSpendingByCategory, selectTotalByCategory } from '../../../reducers/spending/spending.selectors';
import { selectCategoryById } from '../../../reducers/categories/categories.selectors';
import { deleteSpending } from '../../../reducers/spending/spending.actions';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent {
  category$ = this.store.select(selectCategoryById);
  expenses$ = this.store.select(selectSpendingByCategory);
  total$ = this.store.select(selectTotalByCategory);
  constructor(private store: Store) {}

  deleteExpense(id: string): void {
    this.store.dispatch(deleteSpending({ id }));
  }
}
