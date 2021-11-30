import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { spendingFeatureKey, spendingReducer, SpendingState } from './spending/spending.reducer';
import { categoriesFeatureKey, categoriesReducer, CategoriesState } from './categories/categories.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { routerFeatureKey } from './router/router.selectors';
import { settingsFeatureKey, settingsReducer, SettingsState } from './settings/settings.reducer';

export interface AppState {
  [routerFeatureKey]: RouterReducerState;
  [spendingFeatureKey]: SpendingState;
  [categoriesFeatureKey]: CategoriesState;
  [settingsFeatureKey]: SettingsState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  spending: spendingReducer,
  categories: categoriesReducer,
  settings: settingsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
