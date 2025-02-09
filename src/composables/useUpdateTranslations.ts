import { SUPPORTED_LANGUAGES } from '@/constants/supportedLanguages'
import { useI18n } from 'vue-i18n'

export function useUpdateTranslations() {
  const { locale } = useI18n()

  const fakeTranslations = (key: string, value: string) => {
    const fakeTranslatedValue = `${value} fake translated`
    const translationLanguages = SUPPORTED_LANGUAGES.filter(
      (lang) => lang !== locale.value,
    )

    translationLanguages.forEach((lang) => {
      localStorage.setItem(
        `translation_${lang}_${key}`,
        fakeTranslatedValue,
      )
    })
  }

  const updateTranslation = (key: string, value: Event) => {
    const target = value.target as HTMLInputElement
    const newValue = target.innerText

    localStorage.setItem(
      `translation_${locale.value}_${key}`,
      newValue,
    )

    fakeTranslations(key, newValue)
  }

  return {
    updateTranslation,
  }
}
