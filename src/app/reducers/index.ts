import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { SpendingState, spendingFeatureKey, spendingReducer } from './spending/spending.reducer';
import { CategoriesState, categoriesFeatureKey, categoriesReducer } from './categories/categories.reducer';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { routerFeatureKey } from './router/router.selectors';
import { SettingsState, settingsFeatureKey, settingsReducer } from './settings/settings.reducer';
import { appFeatureKey } from './app/app.reducer';
import { fromApp } from './app';

export interface AppState {
  [routerFeatureKey]: RouterReducerState;
  [spendingFeatureKey]: SpendingState;
  [categoriesFeatureKey]: CategoriesState;
  [settingsFeatureKey]: SettingsState;
  [appFeatureKey]: fromApp.GlobalState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  spending: spendingReducer,
  categories: categoriesReducer,
  settings: settingsReducer,
  app: fromApp.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
