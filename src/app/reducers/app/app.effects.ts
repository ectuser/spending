import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { appComponentLoaded } from './app.actions';
import { map } from 'rxjs/operators';
import { CategoriesActions } from '../categories';
import { loadSpending } from '../spending/spending.actions';
import { settingsActions } from '../settings/settings.actions';

@Injectable()
export class AppEffects {
  appComponentLoadedCategories$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appComponentLoaded),
      map(() => CategoriesActions.loadCategories())
    );
  });

  appComponentLoadedSpending$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appComponentLoaded),
      map(() => loadSpending())
    );
  });

  appComponentLoadedSettings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(appComponentLoaded),
      map(() => settingsActions.loadSettings())
    );
  });

  constructor(private store: Store, private actions$: Actions) {}
}
