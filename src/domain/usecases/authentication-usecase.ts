import { AccountModel } from '~/domain/models'

export interface AuthenticationUseCase {
  auth: (
    params: AuthenticationUseCase.Params,
  ) => Promise<AuthenticationUseCase.Model>
}

export namespace AuthenticationUseCase {
  export type Params = {
    email: string
    password: string
  }

  export type Model = AccountModel
}
