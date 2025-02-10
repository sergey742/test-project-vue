<template>
  <div class="avatar" @click="showAvatar = !showAvatar">
    <img
      v-if="user && showAvatar"
      class="image"
      :src="user.avatar"
      alt="avatar"
    />
    <label v-else>{{ userFirstLetters }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import type { UserAvatarProps } from './types'

const props = defineProps<UserAvatarProps>()

const showAvatar = ref(false)

const userFirstLetters = computed(() => {
  if (!props.user) return 'N/A'

  const { first_name, last_name } = props.user
  return `${first_name[0]}${last_name[0]}`
})
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  min-width: 40px;
  width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  font-weight: 700;
  background: #fff;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image {
  height: 100%;
  width: 100%;
  border-radius: 50%;
  object-fit: fill;
}
</style>
