import { AccountModel } from '~/domain/models'

export interface GetAccountByEmailRepo {
  get: (email: string) => Promise<AccountModel>
}

export namespace GetAccountByEmailRepo {
  export type Account = AccountModel
}
