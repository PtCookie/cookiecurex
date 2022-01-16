import { readFile } from 'node:fs/promises';

import { format } from 'date-fns';
import { Command } from 'commander';
import chalk from 'chalk';
import exchange from 'exchange-api';

class App {
  #program: Command;

  constructor() {
    this.#program = new Command();
  }

  async initialize(): Promise<void> {
    try {
      const packageJson = JSON.parse((await readFile('./package.json')).toString());

      this.#program
        .version(packageJson.version)
        .option('-f, --from <currency>', 'exchange currency from...', 'krw')
        .option('-t, --to <currency>', 'exchange currency to...', 'usd')
        .option('-d, --date <date>', 'exchange currency of specific date.', 'latest')
        .requiredOption('-a --amount <amount>', 'exchange amount.');

      this.#program.parse();
    } catch (error: unknown) {
      console.log(`${chalk.red("Can't parse version info.")}`);
      console.log(`${chalk.green((error as Error).toString())}`);

      process.exit(1);
    }
  }

  async execute(): Promise<void> {
    try {
      const { from, to, date, amount }: { from: string; to: string; date: string; amount: number } =
        this.#program.opts();
      const result = (await exchange(amount, from, to, date)) as { rate: number; amount: number };

      console.log(`
      ${chalk.red(from)} to ${chalk.red(to)} at ${chalk.blue(
        date === 'latest' ? format(new Date(), 'yyyy-MM-dd') : date,
      )} [Rate : ${chalk.magenta(result.rate)}] :
    
      ${from} : ${chalk.green(amount)}
      ${to} : ${chalk.green(Math.round(result.amount * 1000) / 1000)}
    `);
    } catch (error: unknown) {
      console.log(`${chalk.red("Can't fetch exchange API.")}`);
      console.log(`${chalk.green((error as Error).toString())}`);

      process.exit(1);
    }
  }
}

export default App;
