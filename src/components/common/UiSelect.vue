<template>
  <div>
    <select
      :value="modelValue"
      @change="onChange"
      :disabled="disabled"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import type { SelectEmits, SelectProps } from './types'

defineProps<SelectProps>()
const emits = defineEmits<SelectEmits>()

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emits('update:modelValue', target.value)
}
</script>

<style scoped>
select {
  padding: 8px;
  font-size: 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 70px;
}

@media (max-width: 768px) {
  select {
    font-size: 12px;
    padding: 6px;
  }
}

select:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
}
</style>
