import { categoriesAdapter, categoriesFeatureKey, CategoriesState } from './categories.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectQueryParam } from '../router/router.selectors';

const selectCategoriesState = createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const { selectAll: selectAllCategories, selectEntities: selectCategoriesEntities } =
  categoriesAdapter.getSelectors(selectCategoriesState);

export const getSelectedCategoryId = selectQueryParam('categoryId');

export const selectCategoryById = createSelector(selectCategoriesEntities, getSelectedCategoryId, (categories, categoryId) =>
  categoryId ? categories[categoryId] : undefined
);
