export type Languages = 'en' | 'es'

export interface Messages {
  [key: string]: string | Messages
}
