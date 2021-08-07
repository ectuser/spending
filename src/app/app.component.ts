import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCategories } from './reducers/categories/categories.actions';
import { loadSpending } from './reducers/spending/spending.actions';
import { selectCategoriesWithSpending } from './reducers/app-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadCategories());
    this.store.dispatch(loadSpending());
  }
}
