import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getSelectedCategoryId, selectAllCategories, selectCategoriesEntities } from '../../../reducers/categories/categories.selectors';
import { addSpending } from '../../../reducers/spending/spending.actions';
import { Spending } from '../../../core/classes/spending';
import { combineLatest, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Dictionary } from '@ngrx/entity';
import { CategoryModel } from '../../../core/interfaces/category.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-spending',
  templateUrl: './add-spending.component.html',
  styleUrls: ['./add-spending.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSpendingComponent implements OnInit, OnDestroy {
  readonly categories$ = this.store.select(selectAllCategories);
  readonly categoriesEntities$ = this.store.select(selectCategoriesEntities);
  readonly selectedCategoryId$ = this.store.select(getSelectedCategoryId);

  form = new FormGroup({
    categoryId: new FormControl('', Validators.required),
    amount: new FormControl(0, Validators.required),
  });

  private unsubscribe = new Subject();

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    combineLatest([this.selectedCategoryId$, this.categoriesEntities$])
      .pipe(
        filter(([id, entities]) => !!id && !!Object.keys(entities).length && !!entities[id]),
        map(([id, entities]) => [id, entities] as [string, Dictionary<CategoryModel>]),
        map(([id, entities]) => entities[id]?.id),
        takeUntil(this.unsubscribe)
      )
      .subscribe((id) => {
        if (id) {
          this.form.controls.categoryId?.patchValue(id);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  addSpending(): void {
    this.store.dispatch(addSpending({ spending: new Spending({ ...this.form.value, date: new Date() }) }));
    this.router.navigate(['/home']);
  }
}
