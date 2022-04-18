import React from 'react'
import SQLiteAddAccountRepository from '~/infra/db/sqlite/sqlite-add-account-repository'
import SignUpScreen from '~/presentation/pages/signup'
import { RequiredFieldValidation } from '~/validation/validators'

export const MakeSignUp: React.FC = () => {
  return <SignUpScreen validation={new RequiredFieldValidation()} addAccount={new SQLiteAddAccountRepository()} />
}
