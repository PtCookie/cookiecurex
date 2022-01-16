import App from '../src/App';

// TODO Find solution for ESM subpath imports issue
describe('App class test', () => {
  it('should be instantiated', () => {
    const app = new App();

    expect(app).toBeInstanceOf(App);
  });
});
