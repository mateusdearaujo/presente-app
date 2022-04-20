/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext } from 'react'

import { AccountModel } from '~/domain/models'

export type UserContextProps = {
  account: AccountModel | null
  setAccount: (account: AccountModel) => Promise<void>
  isSignedIn: () => Promise<void>
}

const DEFAULT_VALUE: UserContextProps = {
  account: null,
  setAccount: (account: AccountModel) => {
    return new Promise(resolve => resolve())
  },
  isSignedIn: () => {
    return new Promise(resolve => resolve())
  },
}

const UserContext = createContext<UserContextProps>(DEFAULT_VALUE)

export default UserContext
