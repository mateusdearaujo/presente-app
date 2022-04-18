import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage'

enablePromise(true)

export const getDBConnection = async (): Promise<SQLiteDatabase> => {
  const db = await openDatabase({ name: 'presente-app-db.db', location: 'default' })
  await createUsersTable(db)
  return db
}

export const createUsersTable = async (db: SQLiteDatabase) => {
  const query = `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, password TEXT NOT NULL);`

  await db.executeSql(query)
}
