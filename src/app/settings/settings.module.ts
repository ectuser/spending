import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TaigaModule } from '../taiga.module';
import { SettingsRoutingModule } from '@settings/settings-routing.module';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryFormComponent } from './pages/category-form/category-form.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [CategoriesComponent, CategoryFormComponent, SettingsComponent],
  imports: [CommonModule, SettingsRoutingModule, SharedModule, TaigaModule],
})
export class SettingsModule {}
