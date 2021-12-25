import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { settingsActions } from './settings.actions';
import { map } from 'rxjs/operators';
import { selectSettingsForStorage } from './settings.selectors';
import { localstorageKeys } from '../../core/consts/localstorage-keys';

@Injectable()
export class SettingsEffects {
  saveLocalstorageSettings$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(settingsActions.selectPeriod),
        concatLatestFrom(() => this.store.select(selectSettingsForStorage)),
        map(([, settings]) => {
          const storedData = JSON.stringify(settings);
          localStorage.setItem(localstorageKeys.settings, storedData);
        })
      );
    },
    { dispatch: false }
  );

  loadSettings$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(settingsActions.loadSettings),
      map(() => {
        const data = localStorage.getItem(localstorageKeys.settings);
        if (data) {
          const parsedData = JSON.parse(data);
          return settingsActions.loadSettingsSuccess({ settings: parsedData });
        } else {
          return settingsActions.loadSettingsFailure();
        }
      })
    );
  });

  constructor(private store: Store, private actions$: Actions) {}
}
