<script setup>
import { QUESTIONS_PAGES } from '@/constants'
import { useAppStore } from '@/stores'
import { TransitionRoot } from '@headlessui/vue'
import SummaryDescriptionItem from '../../components/SummaryDescriptionItem.vue'

const store = useAppStore()
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
        <h2 class="text-2xl font-semibold leading-7 text-gray-900">Summary</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">Please review your selections.</p>
      </div>
      <div class="border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <SummaryDescriptionItem
            label="Budget"
            :value="
              store.answers.budget === 0 || !!store.answers.budget
                ? `S$ ${store.answers.budget}`
                : undefined
            "
            :edit-path="QUESTIONS_PAGES.BUDGET"
          />
          <SummaryDescriptionItem
            label="Categories"
            :value="store.answers.categories"
            :is-value-array="true"
            :edit-path="QUESTIONS_PAGES.CATEGORY"
          />
          <SummaryDescriptionItem
            label="Distance from IRAS"
            :value="store.answers.distance ? `${store.answers.distance} km` : undefined"
            :edit-path="QUESTIONS_PAGES.DISTANCE"
          />
          <SummaryDescriptionItem
            label="Participants"
            :value="
              store.answers.minParticipants && store.answers.maxParticipants
                ? `${store.answers.minParticipants} to ${store.answers.maxParticipants} participants`
                : null
            "
            :edit-path="QUESTIONS_PAGES.SIZE"
          />
        </dl>
      </div>
    </div>
  </TransitionRoot>
</template>
