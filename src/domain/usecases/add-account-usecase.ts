export interface AddAccountUseCase {
  add: (params: AddAccountUseCase.Params) => Promise<void>
}

export namespace AddAccountUseCase {
  export type Params = {
    name: string
    email: string
    password: string
  }
}
