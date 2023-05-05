<script setup>
import { PAGES } from '@/constants'
import { TransitionRoot } from '@headlessui/vue'

defineProps({
  currentPath: String,
  backPath: String,
  nextPath: String
})

defineEmits(['update:appPage'])
</script>
<template>
  <TransitionRoot
    appear
    :show="currentPath !== PAGES.LANDING"
    as="div"
    class="flex flex-col h-full"
    enter="transition-opacity duration-300"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-150"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div class="h-full">
      <slot />
      <div class="mt-auto flex justify-between gap-4 sticky bottom-0 pt-12">
        <button class="grow btn" @click="$emit('update:appPage', backPath)">Back</button>
        <button
          v-if="nextPath"
          class="grow btn btn-primary"
          @click="$emit('update:appPage', nextPath)"
        >
          Next
        </button>
      </div>
    </div>
  </TransitionRoot>
</template>
