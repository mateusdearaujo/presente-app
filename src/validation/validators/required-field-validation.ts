import { Validation } from '~/presentation/protocols'

export class RequiredFieldValidation implements Validation {
  validate(fields: Array<string>): Error | boolean {
    for (const field of fields) {
      if (field.length <= 0) {
        return false
      }
    }

    return true
  }
}
