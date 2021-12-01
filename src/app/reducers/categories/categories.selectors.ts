import { CategoriesState, categoriesAdapter, categoriesFeatureKey } from './categories.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectQueryParam, selectRouteParam } from '../router/router.selectors';

const selectCategoriesState = createFeatureSelector<CategoriesState>(categoriesFeatureKey);

export const { selectAll: selectAllCategories, selectEntities: selectCategoriesEntities } =
  categoriesAdapter.getSelectors(selectCategoriesState);

export const getSelectedCategoryId = selectQueryParam('categoryId');
export const getCategoryIdFromParam = selectRouteParam('categoryId');

export const selectCategoryById = createSelector(selectCategoriesEntities, getSelectedCategoryId, (categories, categoryId) =>
  categoryId ? categories[categoryId] : undefined
);

export const selectCategoryByParamId = createSelector(selectCategoriesEntities, getCategoryIdFromParam, (categories, categoryId) =>
  categoryId ? categories[categoryId] : undefined
);
