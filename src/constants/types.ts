export type Languages = 'en' | 'es'

export interface Messages {
  [key: string]: string | Messages
}

export interface IUser {
  id: number
  avatar: string
  first_name: string
  last_name: string
  email: string
}
