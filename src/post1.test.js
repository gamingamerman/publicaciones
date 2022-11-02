const Post = require('./post');

test('Create a Post', () => {
  const post = new Post('Total JS');
  expect(post).toEqual({
    name: 'Total JS',
  });
});

test('Post Summary', () => {
  const post = new Post('Total JS');
  expect(post.summary).toBe('Total JS publication number 0');
});
