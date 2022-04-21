import { AccountModel } from '~/domain/models'

export interface AuthAccountRepo {
  auth: (email: string, password: string) => Promise<AccountModel>
}

export namespace AuthAccountRepo {
  export type Account = AccountModel
}
