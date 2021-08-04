import { categoriesAdapter, categoriesFeatureKey, CategoriesState } from './categories.reducer';
import { createFeatureSelector } from '@ngrx/store';

const selectCategoriesState = createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const { selectAll: selectAllCategories } = categoriesAdapter.getSelectors(selectCategoriesState);
