import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Spending } from '../../core/classes/spending';

export const loadSpending = createAction('[Spending] Load Spending');
export const loadSpendingSuccess = createAction('[Spending] Load spending success', props<{ spending: Spending[] }>());
export const loadSpendingFailure = createAction('[Spending] Load spending failure');

export const addSpending = createAction('[Spending] Add spending', props<{ spending: Spending }>());
export const changeSpending = createAction('[Spending] Change spending', props<{ spending: Update<Spending> }>());
export const deleteSpending = createAction('[Spending] Delete spending', props<{ id: string }>());
