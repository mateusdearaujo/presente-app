import { AccountModel } from '~/domain/models'

export interface AddAccountUseCase {
  add: (params: AddAccountUseCase.Params) => Promise<AddAccountUseCase.Model>
}

export namespace AddAccountUseCase {
  export type Params = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
  }

  export type Model = AccountModel
}
