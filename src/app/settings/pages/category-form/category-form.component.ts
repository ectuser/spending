import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { selectCategoryByParamId } from '../../../reducers/categories/categories.selectors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoryModel } from '../../../core/interfaces/category.interface';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit, OnDestroy {
  category$ = this.store.select(selectCategoryByParamId);

  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  private unsubscribe$ = new Subject();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.category$.pipe(takeUntil(this.unsubscribe$)).subscribe((category) => {
      if (category) {
        this.processForm(category);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  saveCategory(): void {
    // do smth
  }

  private processForm(category: CategoryModel): void {
    this.form.get('name')?.patchValue(category.name);
  }
}
