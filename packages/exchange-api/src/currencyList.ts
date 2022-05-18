import invokeApi from './invokeApi.js';

async function currencyList(date: number | string | Date = 'latest'): Promise<Record<string, string> | void> {
  try {
    const apiResponse = await invokeApi(date, 'currencies');

    if (apiResponse.status !== 200) {
      return;
    } else {
      return (await apiResponse.json()) as { [key: string]: string };
    }
  } catch (error) {
    console.log("Can't fetch API return.");
    console.log((error as Error).toString());
  }
}

export default currencyList;
