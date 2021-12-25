import { createAction, props } from '@ngrx/store';
import { PeriodType } from '../../core/types/period.type';
import { LocalstorageSettingsModel } from './localstorage-settings.model';

export const settingsActions = {
  periodNumberBack: createAction('[Settings] Period number back'),
  periodNumberNext: createAction('[Settings] Period number next'),
  selectPeriod: createAction('[Settings] select period', props<{ period: PeriodType }>()),
  loadSettings: createAction('[Settings] Load settings'),
  loadSettingsSuccess: createAction('[Settings] Load settings success', props<{ settings: LocalstorageSettingsModel }>()),
  loadSettingsFailure: createAction('[Settings] Load settings failure'),
};
