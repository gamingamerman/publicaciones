const Post = require('./post');
const User = require('./user');
const Client = require('./client');
const Magazine = require('./magazine');

test('Create Post, attach a user and publish', () => {
  const post = new Post('Total JS');
  const pepe = new User('Pepe');
  post.attach(pepe);
  expect(post.getSubscribers()).toBe('Pepe');
  expect(post.publish()).toContain('Pepe is reading Total JS publication number 1');
});

test('Create Post, attach two users and publish', () => {
  const post = new Post('Total JS');
  const pepe = new User('Pepe');
  const mary = new User('Mary');
  post.attach(pepe);
  post.attach(mary);
  const reading = post.publish();
  expect(reading).toContain('Pepe is reading Total JS publication number 1');
  expect(reading).toContain('Mary is reading Total JS publication number 1');
});

test('Create Post: 1. Publish. 2- Attach one users and publish. 3- Attach a client and publish', () => {
  const post = new Post('Total JS');
  let reading = post.publish('');
  expect(reading).toHaveLength(0);
  const pepe = new User('Pepe');
  post.attach(pepe);
  reading = post.publish();
  expect(reading).toContain('Pepe is reading Total JS publication number 2');
  expect(reading).not.toContain('Mary is reading Total JS publication number 2');
  const mary = new Client('Mary');
  post.attach(mary);
  reading = post.publish();
  expect(reading).toContain('Pepe is reading Total JS publication number 3');
  expect(reading).toContain('Mary is reading Total JS publication number 3');
});

test('Create Magazine: 1. Publish. 2- Attach two clients and publish. 3- Attach a user and publish. 4- Detach a client and publish', () => {
  const post = new Magazine('Total JS', 2.99, 'Programming');
  let reading = post.publish('');
  expect(reading).toHaveLength(0);
  const pepe = new Client('Pepe');
  post.attach(pepe);
  const mary = new Client('Mary');
  post.attach(mary);
  reading = post.publish();
  expect(reading).toContain('Pepe is reading Total JS publication number 2 of Programming');
  expect(reading).toContain('Mary is reading Total JS publication number 2 of Programming');
  const lucy = new User('Lucy');
  post.attach(lucy);
  reading = post.publish();
  expect(reading).toContain('Pepe is reading Total JS publication number 3 of Programming');
  expect(reading).toContain('Mary is reading Total JS publication number 3 of Programming');
  expect(reading).not.toContain('Lucy is reading Total JS publication number 3 of Programming');
  post.detach(pepe);
  reading = post.publish();
  expect(reading).not.toContain('Pepe is reading Total JS publication number 4 of Programming');
  expect(reading).toContain('Mary is reading Total JS publication number 4 of Programming');
});
