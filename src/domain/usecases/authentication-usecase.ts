import { AccountModel } from '~/domain/models'

export interface AuthenticationUseCase {
  auth: (params: AuthenticationUseCase.Params) => Promise<AccountModel>
}

export namespace AuthenticationUseCase {
  export type Params = {
    email: string
    password: string
  }
}
