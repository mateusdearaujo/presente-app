import { AccountModel } from '~/domain/models'

export interface AddAccountUseCase {
  add: (params: AddAccountUseCase.Params) => Promise<AccountModel | void>
}

export namespace AddAccountUseCase {
  export type Params = {
    name: string
    email: string
    password: string
  }
}
