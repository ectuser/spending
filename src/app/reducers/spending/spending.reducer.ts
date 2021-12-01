import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { addSpending, changeSpending, deleteSpending, loadSpendingSuccess } from './spending.actions';
import { Spending } from '../../core/classes/spending';

export const spendingFeatureKey = 'spending';

export interface SpendingState extends EntityState<Spending> {}

export const spendingEntityAdapter = createEntityAdapter<Spending>();

const initialState: SpendingState = spendingEntityAdapter.getInitialState({});

export const spendingReducer = createReducer(
  initialState,
  on(loadSpendingSuccess, (state, { spending }) => spendingEntityAdapter.setAll(spending, { ...state })),
  on(addSpending, (state, { spending }) => spendingEntityAdapter.addOne(spending, { ...state })),
  on(changeSpending, (state, { spending }) => spendingEntityAdapter.updateOne(spending, { ...state })),
  on(deleteSpending, (state, { id }) => spendingEntityAdapter.removeOne(id, { ...state }))
);
