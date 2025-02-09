<template>
  <div class="wrapper">
    <h2
      contenteditable
      @input="updateTranslation(`${translationPath}.title`, $event)"
    >
      {{ t(`${translationPath}.title`) }}
    </h2>

    <p
      contenteditable
      @input="updateTranslation(`${translationPath}.text`, $event)"
    >
      {{ t(`${translationPath}.text`) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { PageParagraphProps } from './types'
import { useUpdateTranslations } from '@/composables/useUpdateTranslations'

defineProps<PageParagraphProps>()
const { t } = useI18n()
const { updateTranslation } = useUpdateTranslations()
</script>

<style scoped>
.wrapper {
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}
</style>
