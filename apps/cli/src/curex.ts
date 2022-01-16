import App from './App.js';
import chalk from 'chalk';

// Create App instance
const app = new App();

// Initialize app's metadata
try {
  await app.initialize();
} catch (error: unknown) {
  console.log(`${chalk.red('Application initialize with error.')}`);
  console.log(`${chalk.green((error as Error).toString())}`);

  process.exit(1);
} finally {
  try {
    // Execute app
    await app.execute();
  } catch (error: unknown) {
    console.log(`${chalk.red('Application execute with error.')}`);
    console.log(`${chalk.green((error as Error).toString())}`);

    process.exit(1);
  }
}
