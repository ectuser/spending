import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CategoryItemComponent } from './category-item.component';
import { NO_ERRORS_SCHEMA, SimpleChange, SimpleChanges } from '@angular/core';
import { CategoryModel } from '../../../core/interfaces/category.interface';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { TuiDialogModule } from '@taiga-ui/core';

describe('CategoryItemComponent', () => {
  let component: CategoryItemComponent;
  let fixture: ComponentFixture<CategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryItemComponent ],
      imports: [TuiDialogModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#toggle', () => {
    it('should call next method for editing$ subject once with a different value', function() {
      const spy = jest.spyOn(component.editing$, 'next');

      const value = component.editing$.value;

      component.toggle();

      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(!value);
    });
  });

  describe('#onFocusedChange', () => {
    it('should call editing next method once with false arg if focused arg is false', function() {
      const spy = jest.spyOn(component.editing$, 'next');

      component.onFocusedChange(false);

      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(false);
    });

    it('should not call editing next method if focused arg is true', function() {
      const spy = jest.spyOn(component.editing$, 'next');

      component.onFocusedChange(false);

      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(false);
    });
  });

  describe('#ngOnChanges', () => {
    it('should call patchValue of control 1 time with name param if pass category as an arg', function() {
      const spy = jest.spyOn(component.control, 'patchValue');

      const category: CategoryModel = {id: '123', name: 'test name', icon: ''};
      const change = {category: {currentValue: category}} as unknown as SimpleChanges;
      component.ngOnChanges(change);

      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(category.name);
    });

    it('should not call patchValue if category was not received', function() {
      const spy = jest.spyOn(component.control, 'patchValue');

      const change = {category: {currentValue: undefined}} as unknown as SimpleChanges;
      component.ngOnChanges(change);

      expect(spy).toBeCalledTimes(0);
    });
  });

  describe('#ngOnInit', () => {
    it('if editing$ got emitted false value save function should be called', function() {
      const spy = jest.spyOn(component as any, 'save');

      (component as any).editing$ = new BehaviorSubject(false);

      component.ngOnInit();

      component.editing$.next(false);

      expect(spy).toBeCalledTimes(1);
    });

    it('should focus on element input and call save method 0 times',  function() {
      component['input'] = {
        nativeElement: {
          querySelector() {
            return {
              focus: jest.fn()
            }
          }
        }
      };

      (component as any).editing$ = new BehaviorSubject(false);

      const saveSpy = jest.spyOn(component as any, 'save');
      const focusSpy = jest.spyOn(component.input?.nativeElement.querySelector(), 'focus');

      component.ngOnInit();

      component.editing$.next(true);


      expect(saveSpy).toBeCalledTimes(0);

      setTimeout(() => {
        expect(focusSpy).toBeCalledTimes(1);
      }, 100);
    });
  });

  describe('#save', () => {
    it('should call categoryNameChanged if there is a category', function() {
      const spy = jest.spyOn(component.categoryNameChanged, 'emit');

      const testCategory: CategoryModel = {id: '1', name: 'text', icon: ''};

      component.category = testCategory;
      (component as any).control = new FormControl('name');

      (component as any).save();

      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith({id: testCategory.id, name: 'name'});

    });
  });

  describe('#showDialog', () => {
    it('should change dialogOpened to true', function() {
      component.dialogOpened = false;

      component.showDialog();

      expect(component.dialogOpened).toBe(true);
    });
  });

  describe('#deleteCategory', () => {
    it('should call emit categoryDeleted', function() {
      const spy = jest.spyOn(component.categoryDeleted, 'emit');

      const category: CategoryModel = {id: '1234', name: 'test', icon: ''};
      component.category = category;

      component.deleteCategory();

      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(category.id);
    });
  });

});
