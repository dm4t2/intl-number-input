<template>
  <input type="text" ref="inputRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref, watch } from 'vue'
import { NumberInput, NumberInputOptions } from '../../../../src'

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
  setup(props, { emit, attrs }) {
    let numberInput: NumberInput
    const inputRef: Ref<HTMLInputElement | null> = ref(null)
    const lazyModel = attrs.modelModifiers?.lazy
    onMounted(() => {
      if (inputRef.value) {
        numberInput = new NumberInput({
          el: inputRef.value,
          options: props.options as NumberInputOptions,
          onInput: (value) => {
            if (!lazyModel) {
              emit('update:modelValue', value.number)
            }
          },
          onChange: (value) => {
            if (lazyModel) {
              emit('update:modelValue', value.number)
            }
          }
        })
        numberInput.setValue(props.modelValue)
      }
    })

    watch(
      () => props.options,
      (options) => {
        numberInput.setOptions(options as NumberInputOptions)
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
