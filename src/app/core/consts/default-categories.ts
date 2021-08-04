import { CategoryModel } from '../interfaces/category.interface';

export const defaultCategories: CategoryModel[] = [
  { id: 'health', name: 'Health', icon: '' },
  { id: 'food', name: 'Food', icon: '' },
  { id: 'taxi', name: 'Taxi', icon: '' },
];

export const mappedCategoriesToEntity = { ids: defaultCategories.map((el) => el.id), entities: [...defaultCategories] };
