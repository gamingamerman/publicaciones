const User = require('./user');

test('Create user', () => {
  const user = new User('Pepe');
  expect(user).toEqual({
    name: 'Pepe',
  });
});

test('User reading', () => {
  const user = new User('Pepe');
  expect(user.read('a comic')).toBe('Pepe is reading a comic');
});
