import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from '@settings/pages/settings/settings.component';
import { CategoriesComponent } from '@settings/pages/categories/categories.component';
import { CategoryFormComponent } from '@settings/pages/category-form/category-form.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:categoryId',
    component: CategoryFormComponent,
  },
];

export const SettingsRoutingModule = RouterModule.forChild(routes);
