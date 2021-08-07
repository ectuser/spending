import { CategoryModel } from '../interfaces/category.interface';

export const defaultCategories: CategoryModel[] = [
  { id: 'health', name: 'Health', icon: '' },
  { id: 'food', name: 'Food', icon: '' },
  { id: 'taxi', name: 'Taxi', icon: '' },
  { id: 'restaurants', name: 'Restaurants', icon: '' },
  { id: 'transport', name: 'Transport', icon: '' },
  { id: 'communication', name: 'Communication', icon: '' },
  { id: 'sports', name: 'Sports', icon: '' },
];

export const mappedCategoriesToEntity = { ids: defaultCategories.map((el) => el.id), entities: [...defaultCategories] };
