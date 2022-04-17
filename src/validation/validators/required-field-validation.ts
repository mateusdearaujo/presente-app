import { Validation } from '~/presentation/protocols'

export class RequiredFieldValidation implements Validation {
  validate(fields: Array<string>): Error | boolean {
    for (const field of fields) {
      console.log({ field: field.length })
      if (field.length <= 0) {
        return false
      }
    }

    return true
  }
}
