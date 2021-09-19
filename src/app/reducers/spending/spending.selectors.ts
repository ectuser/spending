import { createFeatureSelector, createSelector } from '@ngrx/store';
import { spendingEntityAdapter, spendingFeatureKey, SpendingState } from './spending.reducer';
import { getSelectedCategoryId } from '../categories/categories.selectors';

const selectSpending = createFeatureSelector<SpendingState>(spendingFeatureKey);

export const { selectAll: selectAllSpending, selectEntities: selectSpendingEntities } = spendingEntityAdapter.getSelectors(selectSpending);

export const selectSpendingByCategory = createSelector(selectAllSpending, getSelectedCategoryId, (spending, categoryId) =>
  spending.filter((sp) => sp.categoryId === categoryId)
);

export const selectTotalByCategory = createSelector(selectSpendingByCategory, (data) => data.reduce((prev, curr) => prev + curr.amount, 0));
