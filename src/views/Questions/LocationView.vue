<script setup>
import TransitionLayout from '@/views/Layouts/TransitionLayout.vue'

defineProps({
  currentPath: String,
  backPath: String,
  nextPath: String
})
</script>

<template>
  <TransitionLayout
    :current-path="currentPath"
    :back-path="backPath"
    :next-path="nextPath"
    @update:app-page="(val) => $emit('update:appPage', val)"
  >
    L?
  </TransitionLayout>
</template>
