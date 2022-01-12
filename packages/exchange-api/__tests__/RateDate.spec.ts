import RateDate from '../src/RateDate';

describe('RateDate specification test', () => {
  it('should return string format', () => {
    const dataString = '2022-01-01';
    const result = new RateDate(dataString);

    expect(result.toString()).toEqual(dataString);
  });
});
