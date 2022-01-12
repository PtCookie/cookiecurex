import App from './App.js';

// Create App instance
const app = new App();

// Initialize app's metadata
await app.initialize();

// Execute app
await app.execute();
