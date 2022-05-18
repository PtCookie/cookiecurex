import invokeApi from './invokeApi.js';

type Currency = string;

async function exchange(
  amount: number,
  from: Currency = 'krw',
  to: Currency = 'usd',
  date: number | string | Date = 'latest',
): Promise<{
  rate: number;
  amount: number;
} | void> {
  const fromLowerCase = from.toLowerCase();
  const toLowerCase = to.toLowerCase();
  const apiEndpoint = `currencies/${fromLowerCase}/${toLowerCase}`;

  try {
    const apiResponse = await invokeApi(date, apiEndpoint);

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
  } catch (error) {
    console.log("Can't fetch API return.");
    console.log((error as Error).toString());
  }
}

export default exchange;
