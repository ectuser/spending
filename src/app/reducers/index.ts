import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { SpendingState, spendingFeatureKey, spendingReducer } from './spending/spending.reducer';
import { CategoriesState, categoriesFeatureKey, categoriesReducer } from './categories/categories.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { routerFeatureKey } from './router/router.selectors';
import { SettingsState, settingsFeatureKey, settingsReducer } from './settings/settings.reducer';

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
