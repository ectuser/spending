import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CategoriesActions, CategoriesSelectors } from '../../../reducers/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  readonly categories$ = this.store.select(CategoriesSelectors.selectAllCategories);

  constructor(private store: Store) {}

  changeCategoryName(category: { id: string; name: string }): void {
    this.store.dispatch(CategoriesActions.changeCategory({ category: { changes: category, id: category.id } }));
  }
}
