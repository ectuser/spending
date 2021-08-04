import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddSpendingComponent } from '@home/components/add-spending/add-spending.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-spending', component: AddSpendingComponent },
];

export const HomeRoutingModule = RouterModule.forChild(routes);
