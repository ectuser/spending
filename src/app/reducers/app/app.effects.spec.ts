import { AppEffects } from './app.effects';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

describe('AppEffects', () => {
  let effects: AppEffects;
  let actions$: Observable<unknown>;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        provideMockStore(),
        AppEffects
      ]
    });

    mockStore = TestBed.inject(MockStore);
    effects = TestBed.inject(AppEffects);
  });

  it('should be created', function() {
    expect(effects).toBeTruthy();
  });

  describe('#appComponentLoadedCategories$', () => {
    it('should return loadCategories action', function() {
    });
  });
})
