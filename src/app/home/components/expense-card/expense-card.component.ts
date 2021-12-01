import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Spending } from '../../../core/classes/spending';

@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpenseCardComponent {
  @Input() expense?: Spending;
  @Output() deleteExpenseEmitter = new EventEmitter<string>();

  deleteExpense(): void {
    if (this.expense) {
      this.deleteExpenseEmitter.emit(this.expense.id);
    }
  }
}
