import { selectTotalByDates } from './app-selectors';
import { Spending } from '../../core/classes/spending';

describe('#selectTotalByDates', () => {
  it('should return sum of array of Spending by amount property', () => {
    const data = [
      new Spending({amount: 10, date: new Date(), categoryId: '1'}),
      new Spending({amount: 1, date: new Date(), categoryId: '1'}),
      new Spending({amount: -10, date: new Date(), categoryId: '1'}),
      new Spending({amount: 20, date: new Date(), categoryId: '1'}),
    ];
    const result = selectTotalByDates.projector(data);
    expect(result).toBe(21);
  });
});
