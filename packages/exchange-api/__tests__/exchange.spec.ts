import { exchange } from '../src';

describe('Exchange function test', () => {
  it('should exchange with default value', async () => {
    const result = await exchange(1000);

    expect(result).toHaveProperty('rate');
    expect(result).toHaveProperty('amount');
    expect(result?.rate).not.toBeNaN();
    expect(result?.amount).not.toBeNaN();
  });

  it('should make currency lowercase', async () => {
    const result = await exchange(1000, 'USD', 'KRW', '2022-01-01');

    expect(result).toHaveProperty('rate');
    expect(result).toHaveProperty('amount');
    expect(result?.rate).not.toBeNaN();
    expect(result?.amount).not.toBeNaN();
  });

  it('should return empty object when wrong input', async () => {
    const result = await exchange(1000, 'test');

    expect(result).toHaveProperty('rate');
    expect(result).toHaveProperty('amount');
    expect(result?.rate).toEqual(0);
    expect(result?.amount).toEqual(0);
  });
});
