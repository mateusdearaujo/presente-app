import React from 'react'
import SignUpScreen from '~/presentation/pages/signup'
import { RequiredFieldValidation } from '~/validation/validators'

export const MakeSignUp: React.FC = () => {
  return <SignUpScreen validation={new RequiredFieldValidation()} />
}
