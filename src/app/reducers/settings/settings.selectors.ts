import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SettingsState, settingsFeatureKey } from './settings.reducer';
import * as dayjs from 'dayjs';
import { LocalstorageSettingsModel } from './localstorage-settings.model';

const selectSettingsState = createFeatureSelector<SettingsState>(settingsFeatureKey);

export const selectPeriod = createSelector(selectSettingsState, (state) => state.period);
export const selectDatesRaw = createSelector(selectSettingsState, ({ fromDate, toDate }) => ({ fromDate, toDate }));
export const selectPeriodNumber = createSelector(selectSettingsState, (state) => state.periodNumber);
export const selectCurrentPeriodDates = createSelector(selectPeriod, selectPeriodNumber, (period, currentPeriod) => {
  const endDay = dayjs().subtract(currentPeriod, period).endOf(period);
  const startDate = dayjs(endDay).startOf(period);

  return { toDate: endDay.valueOf(), fromDate: startDate.valueOf() };
});
export const selectCurrentPeriodTitle = createSelector(selectPeriod, selectPeriodNumber, (period, currentPeriod) => {
  if (period === 'year') {
    return dayjs().subtract(currentPeriod, period).year();
  } else if (period === 'month') {
    // todo - add string instead of number and specify year if it's not current
    return dayjs().subtract(currentPeriod, period).month();
  } else if (period === 'week') {
    const endDay = dayjs().subtract(currentPeriod, period).endOf(period);
    const startDate = dayjs(endDay).startOf(period);

    return `${startDate.format('DD.MM.YYYY')} - ${endDay.format('DD.MM.YYYY ')}`;
  } else {
    // todo - add month as a string
    return dayjs().subtract(currentPeriod, period).format('DD MM');
  }
});

export const selectSettingsForStorage = createSelector(selectSettingsState, (state) => {
  const result: LocalstorageSettingsModel = { period: state.period };
  return result;
});
