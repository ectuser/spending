import { sumByProperty } from './arrays.utils';

describe('#sumByProperty', () => {
  it('should return sum of array of objects by passed property', () => {
    const data: {a: number}[] = [{a: 1}, {a: 10}, {a: -5}, {a: -3}];
    const result = sumByProperty(data, 'a');
    expect(result).toBe(3);
  });
});
