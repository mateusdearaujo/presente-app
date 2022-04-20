import { AccountModel } from '~/domain/models'
import { AuthenticationUseCase } from '~/domain/usecases'

export class Authentication implements AuthenticationUseCase {
  async auth(params: AuthenticationUseCase.Params): Promise<AccountModel> {
    if (!params) {
      throw new Error('missing params')
    }

    return {
      id: 1,
      name: params.email,
      email: params.email,
      password: params.password,
    }
  }
}
