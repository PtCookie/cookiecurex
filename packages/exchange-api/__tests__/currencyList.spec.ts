import { currencyList } from '../src';

describe('Currency list function test', () => {
  it('should return currency list', async () => {
    const result = await currencyList();

    expect(result).toHaveProperty('krw');
    expect(result?.krw).toEqual('South Korean won');
  });
});
