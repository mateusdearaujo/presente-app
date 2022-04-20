import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useCallback } from 'react'

import { AccountModel } from '~/domain/models'
import UserContext, { UserContextProps } from '~/presentation/contexts/user/context'

const UserContextProvider: React.FC = ({ children }) => {
  const [accountState, setAccountState] = useState<AccountModel | null>(null)

  const isSignedIn = useCallback(async () => {
    const jsonValue = await AsyncStorage.getItem('@account')

    setAccountState(jsonValue != null ? JSON.parse(jsonValue) : null)
  }, [])

  const setAccount = async (account: AccountModel) => {
    setAccountState(account)

    await AsyncStorage.setItem('@account', JSON.stringify(account))
  }

  const value: UserContextProps = {
    account: accountState,
    setAccount,
    isSignedIn,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export { UserContextProvider }
export default { UserContext }
