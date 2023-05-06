<script setup>
import { ACTIVITIES } from '@/constants'
import { useAppStore } from '@/stores'
import { TransitionRoot } from '@headlessui/vue'
import { ref, watch } from 'vue'

const maxDistance = ACTIVITIES.sort((a, b) => b.distanceFromIras - a.distanceFromIras)?.[0]
  .distanceFromIras
const minDistance = ACTIVITIES.sort((a, b) => a.distanceFromIras - b.distanceFromIras)?.[0]
  .distanceFromIras

const store = useAppStore()
const distance = ref(store.answers.distance ?? maxDistance)
store.answers.distance = distance.value

watch(distance, () => {
  store.answers.distance = distance.value
})
</script>

<template>
  <TransitionRoot
    appear
    :show="true"
    as="div"
    class="h-full flex flex-col"
    enter="transition-opacity duration-700"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-50"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div class="flex flex-col gap-12 mt-4">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-semibold leading-7 text-gray-900">Distance from IRAS</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Please adjust the slider or fill in the maximum distance (from IRAS) if applicable.
        </p>
      </div>
      <input
        type="range"
        :min="minDistance"
        :max="maxDistance"
        class="range range-lg"
        v-model="distance"
      />
      <div class="form-control w-full self-end">
        <label class="label">
          <span class="label-text">Distance (km)</span>
        </label>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-primary"
          v-model="distance"
        />
      </div>
    </div>
  </TransitionRoot>
</template>
