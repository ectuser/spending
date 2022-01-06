import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { TUI_MOBILE_AWARE } from '@taiga-ui/kit';
import { TUI_IS_ANDROID, TUI_IS_IOS } from '@taiga-ui/cdk';
import { PeriodComponent } from '@home/components/period/period.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import '../../../testing/mocks/intersection-observer-mock';

describe('PeriodComponent', () => {
  let store: MockStore;
  let component: PeriodComponent;

  beforeEach(async () => {

    // todo - solve ReferenceError: IntersectionObserver is not defined issue

    await TestBed.configureTestingModule({
      declarations: [PeriodComponent],
      providers: [
        provideMockStore(),
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
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    component = TestBed.createComponent(PeriodComponent).componentInstance;
    store = TestBed.inject(MockStore);
  });

  // describe('#periodBack', () => {
  //   it('should dispatch action periodNumberBack', function() {
  //     const spy = spyOn(store, 'dispatch');
  //
  //     component.periodBack();
  //
  //     expect(spy).toBeCalled();
  //
  //     const arg = spy.mock.calls[0][0];
  //     const expectedAction = settingsActions.periodNumberBack();
  //
  //     expect(arg).toMatchObject(expectedAction);
  //   });
  // });
});
