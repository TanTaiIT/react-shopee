import axios, { AxiosError } from "axios";
import config from "../constant/config";
export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}
export default function isAxiosUnprocessableEntityError<FormData>(error: unknown): error is AxiosError<FormData> {
  return isAxiosError(error) && error.response?.status === 422
}

export const getAvatarUrl = (avartar?: string) => {
  return `${config.baseUrl}images/${avartar}` || ''
}

const removeSpecialCharacter = (str: string) => {
  return str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')
}
export const generateNameId = ({ name, id }: { name: string, id: string }) => {
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `i-${id}`
}

export function formatCurrentCy(money: number) {
  return new Intl.NumberFormat('de-DE').format(money)
}

export const formatNumberToSocialStyle = (value: number) => {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumSignificantDigits: 1
  }).format(value).replace('.', ',').toLocaleLowerCase()
}