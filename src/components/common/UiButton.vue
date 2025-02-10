<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import type { ButtonEmits, ButtonProps } from './types'

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  variant: 'primary',
  size: 'medium',
})
const emits = defineEmits<ButtonEmits>()

const handleClick = () => emits('click')

const buttonClass = computed(() => [
  'button',
  `button--${props.variant}`,
  `button--${props.size}`,
])
</script>

<style scoped>
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.button--primary {
  background-color: var(--button-primary);
}

.button--primary:hover {
  background-color: var(--button-primary-hover);
}

.button--primary:active {
  background-color: var(--button-primary-active);
}

.button--secondary {
  background-color: var(--button-secondary);
}

.button--secondary:hover {
  background-color: var(--button-secondary-hover);
}

.button--secondary:active {
  background-color: var(--button-secondary-active);
}

.button--small {
  font-size: 14px;
  padding: 5px 10px;
}

.button--medium {
  font-size: 16px;
  padding: 10px 20px;
}

.button--large {
  font-size: 18px;
  padding: 15px 30px;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .button--small {
    font-size: 10px;
    padding: 2px 5px;
  }

  .button--medium {
    font-size: 12px;
    padding: 5px 10px;
  }

  .button--large {
    font-size: 14px;
    padding: 7px 15px;
  }
}
</style>
