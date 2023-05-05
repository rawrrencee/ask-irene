<script setup>
import { PAGES } from '@/constants'
import { computed } from 'vue'

const questions = ['/budget', '/size', '/category', '/location']

const props = defineProps({
  currentPath: String
})
defineEmits(['update:appPage'])

const nextPath = computed(() => {
  const nextIndex = questions.findIndex((q) => props.currentPath.includes(q)) + 1
  if (nextIndex === questions.length) {
    return undefined
  }

  return nextIndex >= 0 ? `/questions${questions[nextIndex]}` : undefined
})

const backPath = computed(() => {
  let backIndex = questions.findIndex((q) => props.currentPath.includes(q))
  if (backIndex <= 0) {
    return PAGES.LANDING
  }
  if (backIndex > 0) backIndex -= 1

  return backIndex >= 0 ? `/questions${questions[backIndex]}` : undefined
})
</script>
<template>
  <router-view
    :currentPath="currentPath"
    :nextPath="nextPath"
    :backPath="backPath"
    @update:app-page="(val) => $emit('update:appPage', val)"
  ></router-view>
</template>
