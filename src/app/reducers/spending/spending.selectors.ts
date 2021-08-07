import { createFeatureSelector } from '@ngrx/store';
import { spendingEntityAdapter, spendingFeatureKey, SpendingState } from './spending.reducer';

const selectSpending = createFeatureSelector<SpendingState>(spendingFeatureKey);

export const { selectAll: selectAllSpending, selectEntities: selectSpendingEntities } = spendingEntityAdapter.getSelectors(selectSpending);
