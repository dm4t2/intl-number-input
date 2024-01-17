<script setup lang="ts">
import { useNumberInput } from '@intl-number-input/vue'

const { inputRef } = useNumberInput({ hideGroupingSeparatorOnFocus: true, useGrouping: true })
</script>

<template>
  <input
    ref="inputRef"
    style="border: 1px solid"
  />
</template>

<style scoped></style>
