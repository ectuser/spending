import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { CategoryModel } from '../../core/interfaces/category.interface';
import { createReducer, on } from '@ngrx/store';
import { mappedCategoriesToEntity } from '../../core/consts/default-categories';
import { upsertCategory, changeCategory, loadCategoriesSuccess, removeCategory } from './categories.actions';
import { generateId } from '../../core/utils/generate-id.util';

export const categoriesFeatureKey = 'categories';

export interface CategoriesState extends EntityState<CategoryModel> {
  selectedCategoryId?: string;
}

export const categoriesAdapter = createEntityAdapter<CategoryModel>();

const initialState: CategoriesState = categoriesAdapter.getInitialState();

export const categoriesReducer = createReducer(
  initialState,
  on(loadCategoriesSuccess, (state, { categories }) => categoriesAdapter.setAll(categories, { ...state })),
  on(upsertCategory, (state, { category }) => {
    const categoryWithId: CategoryModel = category.id ? (category as CategoryModel) : { ...category, id: generateId() };
    return categoriesAdapter.upsertOne(categoryWithId, { ...state });
  }),
  on(removeCategory, (state, { id }) => categoriesAdapter.removeOne(id, { ...state })),
  on(changeCategory, (state, { category }) => categoriesAdapter.updateOne(category, { ...state }))
);
