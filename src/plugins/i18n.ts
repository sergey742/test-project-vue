import { createI18n } from 'vue-i18n'

import { messages } from '@/constants/locales'
import type { Languages, Messages } from '@/constants/types'

const savedLocale =
  (localStorage.getItem('locale') as Languages) || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: messages,
})

export default i18n

export function loadTranslationsFromLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && key.startsWith('translation_')) {
      const [, locale, ...translationKeyParts] = key.split('_')
      const translationKey = translationKeyParts.join('.')
      const value = localStorage.getItem(key)

      if (
        locale &&
        translationKey &&
        value &&
        messages[locale as Languages]
      ) {
        const keys = translationKey.split('.')
        let current = messages[locale as Languages]

        for (let j = 0; j < keys.length - 1; j++) {
          if (!current[keys[j]]) {
            current[keys[j]] = {}
          }
          current = current[keys[j]] as Messages
        }

        current[keys[keys.length - 1]] = value
      }
    }
  }
}
