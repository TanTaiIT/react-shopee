export interface ErrorResponse<Data> {
  message: string
  data?: Data
}

export type NoUndefindFields<T> = {
  [P in keyof T]-?: NoUndefindFields<NonNullable<T[P]>>
}