import { TestBed } from '@angular/core/testing';
import { CategoriesComponent } from '@settings/pages/categories/categories.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CategoriesActions } from '../../../reducers/categories';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let store: MockStore;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesComponent],
      providers: [provideMockStore()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    component = TestBed.createComponent(CategoriesComponent).componentInstance;
    store = TestBed.inject(MockStore);
  });

  it('should create', function() {
    expect(component).toBeTruthy();
  });

  describe('#changeCategoryName', () => {
    it('should dispatch changeCategory action', function() {
      const spy = jest.spyOn(store, 'dispatch');

      const model = {id: '112233', name: 'Test name'};

      component.changeCategoryName(model);

      expect(spy).toBeCalled();

      const expectedAction = CategoriesActions.changeCategory({category: {changes: model, id: model.id}});
      const arg = spy.mock.calls[0][0];
      expect(arg).toMatchObject(expectedAction);
    });
  });

  describe('#deleteCategory', () => {
    it('should dispatch removeCategory action', function() {
      const spy = jest.spyOn(store, 'dispatch');

      const id = 'TestId';

      component.deleteCategory(id);

      expect(spy).toBeCalled();

      const expectedAction = CategoriesActions.removeCategory({id});
      const arg = spy.mock.calls[0][0];
      expect(arg).toMatchObject(expectedAction);
    });
  });
});
