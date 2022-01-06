import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { settingsActions } from '../../../reducers/settings/settings.actions';
import { periods } from '../../../core/consts/periods';
import { PeriodType } from '../../../core/types/period.type';
import { settingsSelectors } from '../../../reducers/settings';
import { TUI_MOBILE_AWARE } from '@taiga-ui/kit';
import { TUI_IS_ANDROID, TUI_IS_IOS } from '@taiga-ui/cdk';

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss'],
  providers: [
    {
      provide: TUI_MOBILE_AWARE,
      useValue: true,
    },
    {
      provide: TUI_IS_IOS,
      useValue: true,
    },
    {
      provide: TUI_IS_ANDROID,
      useValue: false,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeriodComponent {
  readonly selectedPeriodIndex$ = this.store.select(settingsSelectors.selectPeriodIndex);

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
