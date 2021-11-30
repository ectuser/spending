import { createAction } from '@ngrx/store';

export const settingsActions = {
  periodNumberBack: createAction('[Settings] Period number back'),
  periodNumberNext: createAction('[Settings] Period number next'),
};
