import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSelectedCategoryId, selectAllCategories, selectCategoriesEntities } from '../../../reducers/categories/categories.selectors';
import { addSpending } from '../../../reducers/spending/spending.actions';
import { Spending } from '../../../core/classes/spending';
import { combineLatest, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { Dictionary } from '@ngrx/entity';
import { CategoryModel } from '../../../core/interfaces/category.interface';
import { Router } from '@angular/router';
import { TuiDay } from '@taiga-ui/cdk';
import { CreateSpending } from '../../../core/interfaces/create-spending.interface';

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

  currentDate = TuiDay.fromLocalNativeDate(new Date());
  selectedCategory?: string;

  private unsubscribe = new Subject();

  constructor(private store: Store, private router: Router, private cdr: ChangeDetectorRef) {}

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
          this.selectedCategory = id;
          this.cdr.detectChanges();
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  addSpending(model: CreateSpending): void {
    this.store.dispatch(addSpending({ spending: new Spending({ ...model }) }));
    this.router.navigate(['/home']);
  }
}
