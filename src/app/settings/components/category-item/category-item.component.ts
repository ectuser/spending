import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CategoryModel } from '../../../core/interfaces/category.interface';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryItemComponent implements OnChanges, OnInit, OnDestroy {
  @Input() category?: CategoryModel;

  @Output() categoryNameChanged = new EventEmitter<{ id: string; name: string }>();

  readonly control = new FormControl('', Validators.required);
  readonly editing$ = new BehaviorSubject(false);

  private readonly unsubscribe$ = new Subject();

  ngOnInit(): void {
    this.editing$.pipe(skip(1), takeUntil(this.unsubscribe$)).subscribe((status) => {
      if (!status) {
        this.save();
      }
    });
  }

  ngOnChanges({ category }: SimpleChanges): void {
    if (category && category.currentValue) {
      const cat = category.currentValue as CategoryModel;
      this.control.patchValue(cat.name);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggle(): void {
    this.editing$.next(!this.editing$.value);
  }

  onFocusedChange(focused: boolean): void {
    if (!focused) {
      this.editing$.next(false);
    }
  }

  private save(): void {
    if (this.category) {
      this.categoryNameChanged.emit({ id: this.category?.id, name: this.control.value });
    }
  }
}
