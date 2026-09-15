const { getUserCount } = require('../src/userCount');

function mockClient(returnedCount) {
  return {
    query: jest.fn().mockResolvedValue({ rows: [{ count: returnedCount }] }),
  };
}

test('returns the count from the db client as a number', async () => {
  const client = mockClient('42');
  await expect(getUserCount(client)).resolves.toBe(42);
  expect(client.query).toHaveBeenCalledWith(expect.stringContaining('COUNT(*)'));
});

test('handles a numeric count value too', async () => {
  const client = mockClient(7);
  await expect(getUserCount(client)).resolves.toBe(7);
});

test('throws if no dbClient is provided', async () => {
  await expect(getUserCount()).rejects.toThrow(/dbClient/);
});

test('throws if the dbClient has no query method', async () => {
  await expect(getUserCount({})).rejects.toThrow(/dbClient/);
});

test('throws on an unexpected result shape', async () => {
  const client = { query: jest.fn().mockResolvedValue({ rows: [] }) };
  await expect(getUserCount(client)).rejects.toThrow(/unexpected query result/);
});
