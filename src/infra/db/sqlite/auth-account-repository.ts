import { AuthAccountRepo } from '~/data/protocols'

import { getDBConnection } from './connection'

export class SQLiteAuthAccountRepository implements AuthAccountRepo {
  async auth(email: string, password: string): Promise<AuthAccountRepo.Account> {
    const db = await getDBConnection()

    const query = 'SELECT * FROM users WHERE email = ? AND password = ?'

    const results = await db.executeSql(query, [email, password])

    const rows: AuthAccountRepo.Account[] = []

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        rows.push(result.rows.item(index))
      }
    })

    return rows[0]
  }
}
