import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { spendingFeatureKey, spendingReducer, SpendingState } from './spending/spending.reducer';
import { categoriesFeatureKey, categoriesReducer, CategoriesState } from './categories/categories.reducer';

export interface AppState {
  [spendingFeatureKey]: SpendingState;
  [categoriesFeatureKey]: CategoriesState;
}

export const reducers: ActionReducerMap<AppState> = {
  spending: spendingReducer,
  categories: categoriesReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
