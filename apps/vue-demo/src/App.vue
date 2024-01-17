<script setup lang="ts">
import { ref } from 'vue'
import VNumberInput from './components/VNumberInput.vue'

const value = ref(0)
</script>

<template>
  <VApp>
    <VMain>
      <VNumberInput v-model.lazy="value" />
      {{ value }}
    </VMain>
  </VApp>
</template>
