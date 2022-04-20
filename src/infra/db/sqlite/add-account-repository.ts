import { AddAccountRepo } from '~/data/protocols'

import { getDBConnection } from './connection'

export class SQLiteAddAccountRepository implements AddAccountRepo {
  async add({ name, email, password }: AddAccountRepo.Params): Promise<void> {
    const db = await getDBConnection()

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?);'

    await db.executeSql(query, [name, email, password])

    await db.executeSql('SELECT * FROM users WHERE email = ?;', [email])
  }
}
