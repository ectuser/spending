import { createFeatureSelector, createSelector } from '@ngrx/store';
import { settingsFeatureKey, SettingsState } from './settings.reducer';
import * as dayjs from 'dayjs';

const selectSettingsState = createFeatureSelector<SettingsState>(settingsFeatureKey);

export const selectPeriod = createSelector(selectSettingsState, (state) => state.period);
export const selectDatesRaw = createSelector(selectSettingsState, ({ fromDate, toDate }) => ({ fromDate, toDate }));
export const selectPeriodNumber = createSelector(selectSettingsState, (state) => state.periodNumber);
export const selectCurrentPeriodDates = createSelector(selectPeriod, selectPeriodNumber, (period, currentPeriod) => {
  const endDay = dayjs().subtract(currentPeriod, period).endOf(period);
  const startDate = dayjs(endDay).startOf(period);

  return { toDate: endDay.valueOf(), fromDate: startDate.valueOf() };
});
