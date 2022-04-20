import { GetAccountByEmailRepo } from '~/data/protocols'

import { getDBConnection } from './connection'

export class SQLiteGetAccountByEmailRepository implements GetAccountByEmailRepo {
  async get(email: string): Promise<GetAccountByEmailRepo.Account> {
    const db = await getDBConnection()

    const query = 'SELECT * FROM users WHERE email = ?'

    const results = await db.executeSql(query, [email])

    const rows: any[] = []

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        rows.push(result.rows.item(index))
      }
    })

    return rows[0]
  }
}
