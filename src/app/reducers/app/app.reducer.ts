import { createReducer, on } from '@ngrx/store';
import { appComponentLoaded } from './app.actions';

export const appFeatureKey = 'app';

export interface GlobalState {}

export const reducer = createReducer(
  {},
  on(appComponentLoaded, (state) => state)
);
