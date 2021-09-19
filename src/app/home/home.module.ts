import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TaigaModule } from '../taiga.module';
import { AddSpendingComponent } from './components/add-spending/add-spending.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseCardComponent } from './components/expense-card/expense-card.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

@NgModule({
  declarations: [HomeComponent, AddSpendingComponent, CategoryCardComponent, ExpensesComponent, ExpenseCardComponent, ExpenseFormComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, TaigaModule],
})
export class HomeModule {}
