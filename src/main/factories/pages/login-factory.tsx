import React from 'react'
import { Authentication } from '~/data/usecases'
import { SQLiteAuthAccountRepository } from '~/infra/db/sqlite/auth-account-repository'

import LoginScreen from '~/presentation/pages/login'

export const MakeLogin = () => {
  const authAccountRepo = new SQLiteAuthAccountRepository()
  const authentication = new Authentication(authAccountRepo)

  return <LoginScreen authentication={authentication} />
}
