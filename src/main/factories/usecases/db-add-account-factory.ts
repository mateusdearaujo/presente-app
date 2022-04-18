import { DbAddAccount } from '~/data/usecases/db-add-account'
import { SQLiteAddAccountRepository, SQLiteGetAccountByEmailRepository } from '~/infra/db/sqlite'

export const makeDbAddAccount = () => {
  const addAccountRepository = new SQLiteAddAccountRepository()
  const getAccountByEmailRepository = new SQLiteGetAccountByEmailRepository()

  return new DbAddAccount(addAccountRepository, getAccountByEmailRepository)
}
