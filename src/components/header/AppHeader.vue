<template>
  <header class="header">
    <h1
      contenteditable
      @input="updateTranslation('header.appTitle', $event)"
    >
      {{ t('header.appTitle') }}
    </h1>

    <div class="actions">
      <div class="navigation-buttons">
        <RouterLink to="/">
          <UiButton>{{ t('header.navigation.page1') }}</UiButton>
        </RouterLink>

        <RouterLink to="/about">
          <UiButton>{{ t('header.navigation.page2') }}</UiButton>
        </RouterLink>
      </div>

      <UserAvatar :user="userData" />

      <UiSelect
        v-model="locale"
        :options="languages"
        @update:model-value="switchLanguage"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
import UiButton from '@/components/common/UiButton.vue'
import UiSelect from '@/components/common/UiSelect.vue'
import UserAvatar from '@/components/header/userAvatar/UserAvatar.vue'
import { useUpdateTranslations } from '@/composables/useUpdateTranslations'
import type { IUser } from '@/constants/types'
import { loadTranslationsFromLocalStorage } from '@/plugins/i18n'
import apiClient from '@/services/axios'
import { onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const userData = ref<IUser>()

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
]
const { t, locale } = useI18n()
const { updateTranslation } = useUpdateTranslations()

const switchLanguage = (language: string) => {
  locale.value = language
  localStorage.setItem('locale', locale.value)
  loadTranslationsFromLocalStorage()
}

const fetchUser = async () => {
  try {
    const { data: user } = await apiClient.get<IUser>('/users/1')
    userData.value = user
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchUser()
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 15px 40px;
  background-color: #d5ddf3;
  justify-content: space-between;
}

.actions {
  display: flex;
  align-items: center;
  gap: 30px;
}

.navigation-buttons {
  display: flex;
  gap: 10px;
  align-items: center;
}
</style>
