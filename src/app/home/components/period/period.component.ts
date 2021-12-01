import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCurrentPeriodDates, selectPeriod } from '../../../reducers/settings/settings.selectors';
import { settingsActions } from '../../../reducers/settings/settings.actions';
import { periods } from '../../../core/consts/periods';
import { PeriodType } from '../../../core/types/period.type';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeriodComponent {
  readonly currentPeriod$ = this.store.select(selectCurrentPeriodDates);
  readonly selectedPeriod$ = this.store.select(selectPeriod);

  readonly periods = periods;

  constructor(private store: Store) {}

  periodBack(): void {
    this.store.dispatch(settingsActions.periodNumberBack());
  }

  periodNext(): void {
    this.store.dispatch(settingsActions.periodNumberNext());
  }

  selectPeriod(period: PeriodType): void {
    this.store.dispatch(settingsActions.selectPeriod({ period }));
  }
}
