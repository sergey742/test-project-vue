<template>
  <div>
    <AppHeader />

    <main class="main">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/header/AppHeader.vue'
</script>

<style scoped>
.main {
  padding: 15px 40px;
}
</style>
