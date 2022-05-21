import { AccountModel } from '~/domain/models'

export interface UserContextProtocol {
  account: AccountModel | null
  setAccount: (account: AccountModel) => Promise<void>
  isSignedIn: () => Promise<void>
  logout: () => Promise<void>
}
