<template>
  <VTextField
    ref="inputRef"
    v-model="formattedValue"
    class="group"
    :class="`density--${density}`"
    data-cy="number-input"
  >
    <template #prepend-inner>
      <VBtn
        :disabled="numberValue && min ? numberValue <= min : false"
        class="rounded-none group-[.density--default]:h-[38px] group-[.density--comfortable]:h-[34px] group-[.density--compact]:h-6"
        variant="text"
        color="primary"
        icon="mdi-minus"
        @click="decrement"
      />
    </template>
    <template #append-inner>
      <VBtn
        :disabled="numberValue && max ? numberValue >= max : false"
        class="rounded-none group-[.density--default]:h-[38px] group-[.density--comfortable]:h-[34px] group-[.density--compact]:h-6"
        variant="text"
        color="primary"
        icon="mdi-plus"
        @click="increment"
      />
    </template>
  </VTextField>
</template>

<script setup lang="ts">
import { useNumberInput } from '@intl-number-input/vue'
import { watch } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Number,
  modelModifiers: Object,
  step: Number,
  max: Number,
  min: Number,
  density: {
    type: String,
    default: 'default'
  }
})
const { inputRef, formattedValue, numberValue, setValue, increment, decrement } = useNumberInput({
  hideGroupingSeparatorOnFocus: false,
  useGrouping: true,
  step: 3.14
},props.modelValue, props.modelModifiers?.lazy)
watch(numberValue, (value) => {
  console.log('numberValue', value)
  emit('update:modelValue', value)
})
watch(
  () => props.modelValue,
  (value) => {
    console.log('props.modelValue', value)
    setValue(value ?? null)
  }
)
</script>
