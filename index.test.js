const weekNum = require('./index.js');

test('that weekNum returns a value', () => {
  expect(weekNum).not.toBeNull();
});

//New Test
test('that weekNum returns a number', () => {
  expect(weekNum).toBeDefined();
});
