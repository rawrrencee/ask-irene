<script setup>
import { PAGES, QUESTIONS_PAGES } from '@/constants'
import { TransitionRoot } from '@headlessui/vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const questionPaths = Object.keys(QUESTIONS_PAGES).map((k) => QUESTIONS_PAGES[k])
const previousPath = computed(() => {
  const currentPathIndex = questionPaths.findIndex((p) => route.path.includes(p))
  if (currentPathIndex === 0) return PAGES.LANDING

  if (currentPathIndex > 0) return questionPaths[currentPathIndex - 1]

  return undefined
})
const nextPath = computed(() => {
  const currentPathIndex = questionPaths.findIndex((p) => route.path.includes(p))
  if (currentPathIndex < questionPaths.length) {
    return questionPaths[currentPathIndex + 1]
  }
  return undefined
})
</script>

<template>
  <div class="h-full flex flex-col justify-between">
    <div class="pb-12">
      <router-view></router-view>
    </div>
    <TransitionRoot
      appear
      :show="true"
      as="div"
      class="mt-auto flex justify-between gap-4 sticky bottom-0"
      enter="transition-opacity duration-700"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-50"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <button class="grow btn" @click="() => $router.push({ name: previousPath ?? PAGES.LANDING })">
        Back
      </button>
      <button
        v-if="nextPath"
        class="grow btn btn-primary"
        @click="() => $router.push({ name: nextPath ?? PAGES.LANDING })"
      >
        Next
      </button>
    </TransitionRoot>
  </div>
</template>
