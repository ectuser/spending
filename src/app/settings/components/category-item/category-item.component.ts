import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
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
  @Output() categoryDeleted = new EventEmitter<string>();

  @ViewChild('input') input?: ElementRef;

  dialogOpened = false;

  readonly control = new FormControl('', Validators.required);
  readonly editing$ = new BehaviorSubject(false);

  private readonly unsubscribe$ = new Subject();

  ngOnInit(): void {
    this.editing$.pipe(skip(1), takeUntil(this.unsubscribe$)).subscribe((status) => {
      if (status) {
        setTimeout(() => {
          const input = this.input?.nativeElement?.querySelector('input');
          input?.focus();
        }, 100);
      } else {
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

  showDialog(): void {
    this.dialogOpened = true;
  }

  deleteCategory(): void {
    if (this.category) {
      this.categoryDeleted.emit(this.category.id);
    }
  }

  private save(): void {
    if (this.category) {
      this.categoryNameChanged.emit({ id: this.category?.id, name: this.control.value });
    }
  }
}
