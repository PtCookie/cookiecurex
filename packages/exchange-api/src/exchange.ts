import fetch from 'node-fetch';
import RateDate from './RateDate.js';

type ApiVersion = number;
type Currency = string;
type Extension = 'min.json' | 'json';

const apiEndpoint = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api';
const apiVersion: ApiVersion = 1;
const extension: Extension = 'json';

async function exchange(
  amount: number,
  from: Currency = 'krw',
  to: Currency = 'usd',
  date: number | string | Date = 'latest',
): Promise<{
  rate: number;
  amount: number;
}> {
  const dateStr = date !== 'latest' ? new RateDate(date).toString() : date;
  const fromLowerCase = from.toLowerCase();
  const toLowerCase = to.toLowerCase();
  const apiURLString = `${apiEndpoint}@${apiVersion}/${dateStr}/currencies/${fromLowerCase}/${toLowerCase}.${extension}`;
  const apiURL = new URL(apiURLString);

  const apiResponse = await fetch(apiURL.toString());

  if (apiResponse.status !== 200) {
    return {
      rate: 0,
      amount: 0,
    };
  } else {
    const convertedResponse = (await apiResponse.json()) as { [key: string]: string | number };
    const exchangeRate = convertedResponse[toLowerCase] as number;

    return {
      rate: exchangeRate,
      amount: Number(amount) * exchangeRate,
    };
  }
}

export default exchange;
