<script setup>
import { ACTIVITIES } from '@/constants'
import { useAppStore } from '@/stores'
import { TransitionRoot } from '@headlessui/vue'
import { ref, watch } from 'vue'

const maxParticipantsCount = ACTIVITIES.sort((a, b) => b.maxParticipants - a.maxParticipants)?.[0]
  .maxParticipants
const minParticipantsCount = ACTIVITIES.sort((a, b) => a.minParticipants - b.minParticipants)?.[0]
  .minParticipants

const store = useAppStore()
const maxParticipants = ref(store.answers.maxParticipants ?? maxParticipantsCount)
const minParticipants = ref(store.answers.minParticipantsCount ?? minParticipantsCount)
store.answers.maxParticipants = maxParticipants.value
store.answers.minParticipants = minParticipants.value

watch(maxParticipants, () => {
  store.answers.maxParticipants = maxParticipants.value
})
watch(minParticipants, () => {
  store.answers.minParticipants = minParticipants.value
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
        <h2 class="text-2xl font-semibold leading-7 text-gray-900">Participant Group Size</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Please fill in the minimum and maximum group sizes.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div class="form-control w-full self-end">
          <label class="label">
            <span class="label-text">Min. Group Size</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            class="input input-bordered input-primary"
            v-model="minParticipants"
          />
        </div>
        <div class="form-control w-full self-end">
          <label class="label">
            <span class="label-text">Max. Group Size</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            class="input input-bordered input-primary"
            v-model="maxParticipants"
          />
        </div>
      </div>
    </div>
  </TransitionRoot>
</template>
