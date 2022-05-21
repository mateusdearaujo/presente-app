import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState, useCallback } from 'react'

import { AccountModel } from '~/domain/models'
import { UserContextProtocol } from './UserContextProtocol'
import userContext from './userContext'

export const UserProvider: React.FC = ({ children }) => {
  const [accountState, setAccountState] = useState<AccountModel | null>(null)

  const isSignedIn = useCallback(async () => {
    const jsonValue = await AsyncStorage.getItem('@account')

    setAccountState(jsonValue != null ? JSON.parse(jsonValue) : null)
  }, [])

  const setAccount = async (account: AccountModel) => {
    setAccountState(account)

    await AsyncStorage.setItem('@account', JSON.stringify(account))
  }

  const logout = async () => {
    await AsyncStorage.removeItem('@account')
    setAccountState(null)
  }

  const value: UserContextProtocol = {
    account: accountState,
    setAccount,
    isSignedIn,
    logout,
  }

  return <userContext.Provider value={value}>{children}</userContext.Provider>
}
