import { generateId } from './generate-id.util';

describe('#generateId', () => {
  it('should return string value in format xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx', () => {
    const regex = /[\w]{8}-[\w]{4}-[\w]{4}-[\w]{4}-[\w]{12}/;
    const result = generateId();
    expect(result).toMatch(regex);
  });
});
