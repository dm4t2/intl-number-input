<template>
  <input type="text" ref="inputRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref, watch } from 'vue'
import { NumberFormatStyle, NumberInput } from '../../../../src'

export default defineComponent({
  name: 'NumberInput',
  props: {
    modelValue: {
      type: Number,
      default: null
    },
    options: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    let numberInput: NumberInput
    const inputRef: Ref<HTMLInputElement | null> = ref(null)
    onMounted(() => {
      if (inputRef.value) {
        numberInput = new NumberInput({
          el: inputRef.value,
          options: {
            formatStyle: NumberFormatStyle.Currency,
            ...props.options
          },
          onInput: (value) => {
            emit('update:modelValue', value.number)
          }
        })
        numberInput.setValue(props.modelValue)
      }
    })

    watch(
      () => props.options,
      (options) => {
        numberInput.setOptions(options)
      }
    )

    watch(
      () => props.modelValue,
      (modelValue) => {
        numberInput.setValue(modelValue)
      }
    )

    return {
      inputRef,
      decrement: () => numberInput.decrement(),
      increment: () => numberInput.increment()
    }
  }
})
</script>
