<template>
  <div class="wrapper">
    <h2>{{ title }}</h2>

    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import type { PageParagraphProps } from './types'

defineProps<PageParagraphProps>()
</script>

<style scoped>
.wrapper {
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}
</style>
