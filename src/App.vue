<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import DefaultLayout from './layouts/DefaultLayout.vue'

const route = useRoute()

const layout = computed(() => route.meta.layout || DefaultLayout)
</script>
