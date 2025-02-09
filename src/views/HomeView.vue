<template>
  <div>
    <PageParagraph
      v-for="(paragraph, key) in messages.en.page1"
      :key="`page1.${key}`"
      :translation-path="`page1.${key}`"
    />
  </div>
</template>

<script setup lang="ts">
import PageParagraph from '@/components/pageParagraph/PageParagraph.vue'
import { messages } from '@/constants/locales'
</script>
