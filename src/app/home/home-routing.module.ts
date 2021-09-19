import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddSpendingComponent } from '@home/components/add-spending/add-spending.component';
import { ExpensesComponent } from '@home/components/expenses/expenses.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'spending',
    children: [{ path: 'new', component: AddSpendingComponent }],
  },
  { path: 'expenses', component: ExpensesComponent },
];

export const HomeRoutingModule = RouterModule.forChild(routes);
