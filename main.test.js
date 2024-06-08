const helloWorld = require('./main');

test('says hello world', () => {
  expect(helloWorld()).toBe("Hola Mundo!");
});