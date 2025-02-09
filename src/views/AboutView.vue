<template>
  <div>
    <PageParagraph
      v-for="(paragraph, key) in messages.en.page2"
      :key="`page2.${key}`"
      :translation-path="`page2.${key}`"
    />
  </div>
</template>

<script setup lang="ts">
import PageParagraph from '@/components/pageParagraph/PageParagraph.vue'
import { messages } from '@/constants/locales'
</script>
