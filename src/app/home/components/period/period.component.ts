import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentPeriodDates } from '../../../reducers/settings/settings.selectors';
import { settingsActions } from '../../../reducers/settings/settings.actions';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss'],
})
export class PeriodComponent {
  currentPeriod$ = this.store.select(selectCurrentPeriodDates);

  constructor(private store: Store) {}

  periodBack(): void {
    this.store.dispatch(settingsActions.periodNumberBack());
  }

  periodNext(): void {
    this.store.dispatch(settingsActions.periodNumberNext());
  }
}
