import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadCategories, loadCategoriesFailure, loadCategoriesSuccess } from './categories.actions';
import { map } from 'rxjs/operators';
import { categoriesFeatureKey } from './categories.reducer';
import { CategoryModel } from '../../core/interfaces/category.interface';
import { defaultCategories } from '../../core/consts/default-categories';

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

  constructor(private actions$: Actions) {}
}
