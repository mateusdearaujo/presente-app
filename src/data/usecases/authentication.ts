import { AuthenticationUseCase } from '~/domain/usecases'

export class Authentication implements AuthenticationUseCase {
  async auth(params: AuthenticationUseCase.Params): Promise<AuthenticationUseCase.Model> {
    if (!params) {
      throw new Error('missing params')
    }

    return {
      id: 1,
      username: params.email,
      password: params.password,
    }
  }
}
