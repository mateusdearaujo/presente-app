import { AddAccountRepo } from '~/data/protocols'
import { getDBConnection } from '~/infra/db/sqlite'

export class SQLiteAddAccountRepository implements AddAccountRepo {
  async add({ name, email, password }: AddAccountRepo.Params): Promise<void> {
    const db = await getDBConnection()

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?);'

    await db.executeSql(query, [name, email, password])
  }
}
