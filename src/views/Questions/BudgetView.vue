<script setup>
import { ACTIVITIES } from '@/constants'
import { useAppStore } from '@/stores'
import { TransitionRoot } from '@headlessui/vue'
import { ref, watch } from 'vue'

const maxBudget = ACTIVITIES.sort((a, b) => b.averageCost - a.averageCost)?.[0].averageCost
const minBudget = ACTIVITIES.sort((a, b) => a.averageCost - b.averageCost)?.[0].averageCost

const store = useAppStore()
const budget = ref(store.answers.budget ?? minBudget)
store.answers.budget = budget.value

watch(budget, () => {
  store.answers.budget = budget.value
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
        <h2 class="text-2xl font-semibold leading-7 text-gray-900">Budget</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Please adjust the slider or fill in the maximum cost of activity (per person).
        </p>
      </div>
      <input
        type="range"
        :min="minBudget"
        :max="maxBudget"
        class="range range-lg"
        v-model="budget"
      />
      <div class="form-control w-full self-end">
        <label class="label">
          <span class="label-text">Amount (S$)</span>
        </label>
        <input
          type="number"
          placeholder="Type here"
          class="input input-bordered input-primary"
          v-model="budget"
        />
      </div>
    </div>
  </TransitionRoot>
</template>
