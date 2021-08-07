import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addSpending, changeSpending, deleteSpending, loadSpending, loadSpendingFailure, loadSpendingSuccess } from './spending.actions';
import { map, withLatestFrom } from 'rxjs/operators';
import { spendingFeatureKey } from './spending.reducer';
import { SpendingStorage } from '../../core/interfaces/localstorage-models/spending-storage.interface';
import { Store } from '@ngrx/store';
import { selectAllSpending } from './spending.selectors';
import { Spending } from '../../core/classes/spending';

@Injectable()
export class SpendingEffects {
  loadSpending$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadSpending.type),
      map(() => {
        const rowData = localStorage.getItem(spendingFeatureKey);
        if (!rowData) {
          return loadSpendingFailure();
        }
        const objData = JSON.parse(rowData) as SpendingStorage[];
        const newSpending = objData.map((spending) => new Spending({ ...spending, date: new Date(spending.date) }));
        return loadSpendingSuccess({ spending: newSpending });
      })
    );
  });

  updateSpending$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(changeSpending.type, deleteSpending.type, addSpending.type),
        withLatestFrom(this.store.select(selectAllSpending)),
        map(([_, spending]) => {
          const transformed = spending.map((sp) => sp.transformToSaveModel());
          localStorage.setItem(spendingFeatureKey, JSON.stringify(transformed));
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private store: Store) {}
}
