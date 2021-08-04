import { createReducer } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { SpendingModel } from '../../core/interfaces/spending.interface';

export const spendingFeatureKey = 'spending';

export interface SpendingState extends EntityState<SpendingModel> {}

export const spendingEntityAdapter = createEntityAdapter<SpendingModel>();

const initialState: SpendingState = spendingEntityAdapter.getInitialState({});

export const spendingReducer = createReducer(initialState);
