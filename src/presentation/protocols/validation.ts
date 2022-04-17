export interface Validation {
  validate(fields: Array<string>): Error | boolean
}
