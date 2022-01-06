import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from '@settings/pages/settings/settings.component';
import { CategoriesComponent } from '@settings/pages/categories/categories.component';
import { CategoryFormComponent } from '@settings/pages/category-form/category-form.component';
import { PageType } from '../core/enums/page-type.enum';

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
    path: 'categories/new',
    component: CategoryFormComponent,
    data: {
      pageType: PageType.New,
    },
  },
  {
    path: 'categories/:categoryId',
    component: CategoryFormComponent,
    data: {
      pageType: PageType.Edit,
    },
  },
];

export const SettingsRoutingModule = RouterModule.forChild(routes);
