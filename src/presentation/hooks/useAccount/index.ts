// import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

import { AccountModel } from '~/domain/models'

type useAccountHook = {
  account: AccountModel | null
  setAccount: Function
}

export const useAccount = (): useAccountHook => {
  const [account, setAccount] = useState<AccountModel | null>(null)

  // const getAccount = async () => {
  //   const jsonValue = await AsyncStorage.getItem('@account')
  //   return jsonValue != null ? JSON.parse(jsonValue) : null
  // }

  // const setAccount = async (obj: AccountModel) => {
  //   setAccountState(account)
  //   await AsyncStorage.setItem('@account', JSON.stringify(obj))
  //   console.log(`setou nova conta: ${JSON.stringify(obj)}`)
  // }

  return {
    account,
    setAccount,
  }
}
