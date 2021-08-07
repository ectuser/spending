import { createSelector } from '@ngrx/store';
import { selectAllCategories } from './categories/categories.selectors';
import { selectAllSpending } from './spending/spending.selectors';
import { CategoryCard } from '../core/interfaces/category-card.interface';

export const selectCategoriesWithSpending = createSelector(selectAllCategories, selectAllSpending, (cat, sp) => {
  const total = sp.reduce((curr, next) => curr + next.amount || 0, 0);
  return cat.map((category) => {
    const obj: CategoryCard = {
      id: category.id,
      name: category.name,
      icon: category.icon,
      amount: sp.filter((spending) => spending.categoryId === category.id).reduce((curr, next) => curr + (next.amount || 0), 0),
      percent: 0,
    };
    obj.percent = obj.amount / total;
    return obj;
  });
});

export const selectSortedCategoriesWithSpending = createSelector(selectCategoriesWithSpending, (categories) =>
  categories.sort((a, b) => (a.amount > b.amount ? -1 : b.amount > a.amount ? 1 : 0))
);
