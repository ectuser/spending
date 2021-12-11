import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TuiDay } from '@taiga-ui/cdk';
import { CategoryModel } from '../../../core/interfaces/category.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateSpending } from '../../../core/interfaces/create-spending.interface';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseFormComponent implements OnChanges {
  @Input() date?: TuiDay;
  @Input() categoryId?: string;
  @Input() amount?: number;
  @Input() categories: CategoryModel[] = [];
  @Output() action = new EventEmitter<CreateSpending>();

  form = new FormGroup({
    categoryId: new FormControl('', Validators.required),
    amount: new FormControl(0, Validators.required),
    date: new FormControl(),
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.date?.currentValue) {
      this.form.controls.date?.patchValue(changes.date.currentValue);
    }
    if (changes.amount?.currentValue) {
      this.form.controls.amount?.patchValue(changes.amount.currentValue);
    }
    if (changes.categoryId?.currentValue) {
      this.form.controls.categoryId?.patchValue(changes.categoryId.currentValue);
    }
  }

  doAction(): void {
    this.action.emit({ ...this.form.value, date: (this.form.controls.date.value as TuiDay).toLocalNativeDate() });
  }
}
