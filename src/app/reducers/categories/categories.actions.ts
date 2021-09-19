import { createAction, props } from '@ngrx/store';
import { CategoryModel } from '../../core/interfaces/category.interface';
import { BaseCategory } from '../../core/interfaces/base-category.interface';
import { Update } from '@ngrx/entity';

export const loadCategories = createAction('[Categories] Load categories');
export const loadCategoriesSuccess = createAction('[Categories] Load categories success', props<{ categories: CategoryModel[] }>());
export const loadCategoriesFailure = createAction('[Categories] Load categories failure');

export const upsertCategory = createAction('[Categories] Upsert category', props<{ category: BaseCategory & { id?: string } }>());
export const removeCategory = createAction('[Categories] Remove category', props<{ id: string }>());
export const changeCategory = createAction('[Categories] Change category', props<{ category: Update<BaseCategory> }>());
