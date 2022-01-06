import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { selectCategoryByParamId } from '../../../reducers/categories/categories.selectors';
import { combineLatest, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';
import { CategoryModel } from '../../../core/interfaces/category.interface';
import { selectPageType } from '../../../reducers/router/router.selectors';
import { PageType } from '../../../core/enums/page-type.enum';
import { CategoriesActions } from '../../../reducers/categories';
import { BaseCategory } from '../../../core/interfaces/base-category.interface';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
})
export class CategoryFormComponent implements OnInit, OnDestroy {
  readonly category$ = this.store.select(selectCategoryByParamId);
  readonly pageType$ = this.store.select(selectPageType);

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
    combineLatest([this.pageType$, this.category$])
      .pipe(
        filter(([pageType, category]) => pageType === PageType.New || (pageType === PageType.Edit && !!category)),
        take(1)
      )
      .subscribe(([, category]) => {
        const categoryToUpsert: BaseCategory & { id?: string } = {
          name: this.form.get('name')?.value,
          icon: category?.icon || '',
          id: category?.id,
        };
        this.store.dispatch(CategoriesActions.upsertCategory({ category: categoryToUpsert }));
      });
  }

  private processForm(category: CategoryModel): void {
    this.form.get('name')?.patchValue(category.name);
  }
}
