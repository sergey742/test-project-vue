<template>
  <header class="header">
    <h1>Page Title</h1>

    <div class="actions">
      <div class="navigation-buttons">
        <RouterLink to="/">
          <UiButton>Page 1</UiButton>
        </RouterLink>

        <RouterLink to="/about">
          <UiButton>Page 2</UiButton>
        </RouterLink>
      </div>

      <UserAvatar />

      <UiSelect v-model="selectedLanguage" :options="languages" />
    </div>
  </header>
</template>

<script setup lang="ts">
import UiButton from '@/components/common/UiButton.vue'
import UiSelect from '@/components/common/UiSelect.vue'
import UserAvatar from '@/components/header/userAvatar/UserAvatar.vue'
import { ref } from 'vue'

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
]

const selectedLanguage = ref(languages[0].value)
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
