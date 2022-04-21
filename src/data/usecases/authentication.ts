import { AccountModel } from '~/domain/models'
import { AuthenticationUseCase } from '~/domain/usecases'
import { AuthAccountRepo } from '../protocols'

export class Authentication implements AuthenticationUseCase {
  private authAccountRepository: AuthAccountRepo

  constructor(authAccountRepo: AuthAccountRepo) {
    this.authAccountRepository = authAccountRepo
  }

  async auth(params: AuthenticationUseCase.Params): Promise<AccountModel | undefined> {
    if (!params) {
      return
    }

    const account = await this.authAccountRepository.auth(params.email, params.password)

    if (!account) {
      return undefined
    }

    return {
      id: account.id,
      name: account.name,
      email: account.email,
      password: account.password,
    }
  }
}
