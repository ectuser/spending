import { createReducer, on } from '@ngrx/store';
import { PeriodEnum } from '../../core/enums/period.enum';
import { PeriodType } from '../../core/types/period.type';
import { settingsActions } from './settings.actions';

export const settingsFeatureKey = 'settings';

export interface SettingsState {
  fromDate?: number;
  toDate?: number;
  period: PeriodType;
  periodNumber: number;
}

const initialState: SettingsState = {
  period: 'month',
  periodNumber: 0,
};

export const settingsReducer = createReducer(
  initialState,
  on(settingsActions.periodNumberBack, (state): SettingsState => ({ ...state, periodNumber: state.periodNumber + 1 })),
  on(settingsActions.periodNumberNext, (state): SettingsState => ({ ...state, periodNumber: state.periodNumber - 1 })),
  on(settingsActions.selectPeriod, (state, { period }): SettingsState => ({ ...state, period }))
);
