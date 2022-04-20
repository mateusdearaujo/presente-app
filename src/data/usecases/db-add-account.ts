import { AddAccountUseCase } from '~/domain/usecases'
import { AddAccountRepo, GetAccountByEmailRepo } from '~/data/protocols'
import { AccountModel } from '~/domain/models'

export class DbAddAccount implements AddAccountUseCase {
  private addAccountRepository: AddAccountRepo
  private getAccountRepository: GetAccountByEmailRepo

  constructor(addAccountRepo: AddAccountRepo, getAccountByEmailRepo: GetAccountByEmailRepo) {
    this.addAccountRepository = addAccountRepo
    this.getAccountRepository = getAccountByEmailRepo
  }

  async add(params: AddAccountUseCase.Params): Promise<AccountModel | void> {
    const account = await this.getAccountRepository.get(params.email)

    if (!account) {
      await this.addAccountRepository.add(params)
      return await this.getAccountRepository.get(params.email)
    }
  }
}
