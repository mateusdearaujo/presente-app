export interface AddAccountRepo {
  add: (params: AddAccountRepo.Params) => Promise<void>
}

export namespace AddAccountRepo {
  export type Params = {
    name: string
    email: string
    password: string
  }
}
