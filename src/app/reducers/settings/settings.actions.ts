import { createAction, props } from '@ngrx/store';
import { PeriodType } from '../../core/types/period.type';

export const settingsActions = {
  periodNumberBack: createAction('[Settings] Period number back'),
  periodNumberNext: createAction('[Settings] Period number next'),
  selectPeriod: createAction('[Settings] select period', props<{ period: PeriodType }>()),
};
