import fetch from 'node-fetch';
import RateDate from './RateDate.js';

type ApiVersion = number;
type Extension = 'min.json' | 'json';

const apiEndpoint = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api';
const apiVersion: ApiVersion = 1;
const extension: Extension = 'json';

async function invokeApi(date: number | string | Date = 'latest', ApiEndpoint: string) {
  const dateStr = date !== 'latest' ? new RateDate(date).toString() : date;
  const apiURLString = `${apiEndpoint}@${apiVersion}/${dateStr}/${ApiEndpoint}.${extension}`;
  const apiURL = new URL(apiURLString);

  return fetch(apiURL.toString());
}

export default invokeApi;
