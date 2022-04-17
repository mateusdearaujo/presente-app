import { AddAccountUseCase } from '~/domain/usecases'
import { AddAccountRepo } from '~/data/protocols/add-account-repo'

export class DbAddAccount implements AddAccountUseCase {
  private addAccountRepository: AddAccountRepo

  constructor(addAccountRepo: AddAccountRepo) {
    this.addAccountRepository = addAccountRepo
  }

  async add(params: AddAccountUseCase.Params): Promise<void> {
    this.addAccountRepository.add(params)
  }
}
