import React from 'react'
import SignUpScreen from '~/presentation/pages/signup'
import { RequiredFieldValidation } from '~/validation/validators'
import { makeDbAddAccount } from '~/main/factories/usecases/db-add-account-factory'

export const MakeSignUp = () => {
  return <SignUpScreen validation={new RequiredFieldValidation()} addAccount={makeDbAddAccount()} />
}
