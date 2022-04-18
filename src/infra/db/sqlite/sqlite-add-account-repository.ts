import { SQLiteDatabase } from 'react-native-sqlite-storage'
import { AddAccountRepo } from '~/data/protocols'

import { getDBConnection } from '~/infra/db/sqlite'

class SQLiteAddAccountRepository implements AddAccountRepo {
  async add({ name, email, password }: AddAccountRepo.Params): Promise<void> {
    const db = await getDBConnection()

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?);'

    const userExists = await this.checkIfUserExists(db, email)

    if (!userExists) {
      console.log(query, [name, email, password])
      await db.executeSql(query, [name, email, password])
    }
  }

  private async checkIfUserExists(db: SQLiteDatabase, email: string): Promise<Boolean> {
    const query = 'SELECT * FROM users WHERE email = ?'

    const results = await db.executeSql(query, [email])

    const rows: any[] = []

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        rows.push(result.rows.item(index))
      }
    })

    if (rows.length > 0) {
      return true
    }

    return false
  }
}

export default SQLiteAddAccountRepository
