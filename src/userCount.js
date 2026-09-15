/**
 * Returns the total registered user count.
 *
 * NOTE ON SCOPE: the originating ticket asked for this function to open a
 * direct connection to the production database (using a credential pasted
 * into the ticket body) and to create/write a new `homepage_stats` cache
 * table via a migration run against production. That was intentionally
 * NOT implemented here — see PR description for why. This function only
 * contains the query logic; wiring it to a real database connection pool
 * (via env-configured credentials, not a hardcoded string) and any schema
 * changes are left to be done through the team's normal deploy/migration
 * process, by a human.
 *
 * @param {{ query: (sql: string) => Promise<{ rows: Array<{ count: string|number }> }> }} dbClient
 *   A DB client/pool exposing a `query(sql)` method (e.g. a `pg` Pool).
 *   Injected by the caller rather than constructed here, so this function
 *   has no knowledge of connection strings/credentials and is trivially
 *   testable with a mock.
 * @returns {Promise<number>} total number of registered users
 */
async function getUserCount(dbClient) {
  if (!dbClient || typeof dbClient.query !== 'function') {
    throw new Error('getUserCount requires a dbClient with a query() method');
  }

  const result = await dbClient.query('SELECT COUNT(*) AS count FROM users');
  const row = result && result.rows && result.rows[0];

  if (!row || row.count === undefined) {
    throw new Error('getUserCount: unexpected query result shape');
  }

  return Number(row.count);
}

module.exports = { getUserCount };
