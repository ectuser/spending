import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RouterReducerState, getSelectors } from '@ngrx/router-store';
import { PageType } from '../../core/enums/page-type.enum';

export const routerFeatureKey = 'router';

export const selectRouter = createFeatureSelector<RouterReducerState>(routerFeatureKey);

export const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = getSelectors(selectRouter);

export const selectPageType = createSelector(selectRouteData, (data) => {
  const pageType: PageType | undefined = data.pageType;
  return pageType;
});
