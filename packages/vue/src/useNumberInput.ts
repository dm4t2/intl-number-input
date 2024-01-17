import { NumberInput, NumberInputOptions, NumberInputValue } from '@intl-number-input/core'
import { ComponentPublicInstance, MaybeRef, readonly, Ref, ref, unref, watch } from 'vue'

const findInput = (el: HTMLElement | null) => (el?.matches('input') ? el : el?.querySelector('input')) as HTMLInputElement

export function useNumberInput(options?: MaybeRef<NumberInputOptions>, initialValue?: number | null, lazy?: boolean) {
  let numberInput: NumberInput | null
  const inputRef: Ref<HTMLInputElement | ComponentPublicInstance | null> = ref(null)
  const formattedValue = ref<string | null>(null)
  const numberValue = ref<number | null>(null)

  watch(inputRef, (value) => {
    if (value) {
      const el = findInput((value as ComponentPublicInstance)?.$el ?? value)
      if (el) {
        numberInput = new NumberInput({
          el,
          options: unref(options),
          onInput: (value: NumberInputValue) => {
            formattedValue.value = value.formatted
            if (!lazy) {
              numberValue.value = value.number
            }
          },
          onChange: (value: NumberInputValue) => {
            if (lazy) {
              numberValue.value = value.number
            }
          }
        })
        if (initialValue !== undefined) {
          numberInput.setValue(initialValue)
        }
      } else {
        console.error('No input element found. Please make sure that the "inputRef" template ref is properly assigned.')
      }
    } else {
      numberInput?.destroy()
      numberInput = null
    }
  })

  return {
    inputRef,
    formattedValue,
    numberValue: readonly(numberValue),
    setValue: (value: number | null) => numberInput?.setValue(value),
    increment: () => numberInput?.increment(),
    decrement: () => numberInput?.decrement()
  }
}
