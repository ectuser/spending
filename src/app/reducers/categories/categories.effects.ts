import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCategories, loadCategoriesFailure, loadCategoriesSuccess, removeCategory, upsertCategory } from './categories.actions';
import { map, withLatestFrom } from 'rxjs/operators';
import { categoriesFeatureKey } from './categories.reducer';
import { CategoryModel } from '../../core/interfaces/category.interface';
import { defaultCategories } from '../../core/consts/default-categories';
import { Store } from '@ngrx/store';
import { selectAllCategories } from './categories.selectors';

@Injectable()
export class CategoriesEffects {
  loadCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCategories.type),
      map(() => {
        const rawData = localStorage.getItem(categoriesFeatureKey);
        const data = rawData ? (JSON.parse(rawData) as CategoryModel[]) : null;
        return data ? loadCategoriesSuccess({ categories: data }) : loadCategoriesFailure();
      })
    );
  });

  loadCategoriesFailure$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadCategoriesFailure.type),
      map(() => {
        localStorage.setItem(categoriesFeatureKey, JSON.stringify(defaultCategories));
        return loadCategoriesSuccess({ categories: defaultCategories });
      })
    );
  });

  actionsWithCategories$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(upsertCategory.type, removeCategory.type),
        withLatestFrom(this.store.select(selectAllCategories)),
        map((categories) => {
          localStorage.setItem(categoriesFeatureKey, JSON.stringify(categories));
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store) {}
}
