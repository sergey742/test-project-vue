export interface ButtonProps {
  disabled?: boolean
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
}

export interface ButtonEmits {
  (e: 'click'): void
}

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps {
  modelValue: string
  options: SelectOption[]
  disabled?: boolean
}

export interface SelectEmits {
  (e: 'update:modelValue', value: string): void
}
