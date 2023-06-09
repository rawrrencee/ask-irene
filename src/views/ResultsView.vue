<script setup>
import { ACTIVITIES, QUESTIONS_PAGES } from '@/constants'
import { useAppStore } from '@/stores'
import { getCategoryName, getColourClass, getLabelForActivityAttribute, openWindow } from '@/util'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  TransitionRoot
} from '@headlessui/vue'
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  StarIcon
} from '@heroicons/vue/20/solid'
import { computed, ref, watch } from 'vue'

import NotImplementedDialog from '@/components/NotImplementedDialog.vue'
import { BarsArrowDownIcon, BarsArrowUpIcon, UserGroupIcon } from '@heroicons/vue/24/outline'

const store = useAppStore()
const isLoading = ref(true)
setTimeout(() => {
  isLoading.value = false
}, 700)

const filteredResults = ACTIVITIES.filter(
  (a) =>
    a.averageCost <= store.answers.budget &&
    store.answers.categories.includes(a.category) &&
    a.distanceFromIras <= store.answers.distance &&
    a.minParticipants >= store.answers.minParticipants &&
    a.maxParticipants <= store.answers.maxParticipants
)
const results = ref(filteredResults.sort((a, b) => a.distanceFromIras - b.distanceFromIras))

const selectedResults = ref([])
const selectedSortBy = ref('distanceFromIras')
const selectedSortOrder = ref('asc')
const isNotImplementedDialogShown = ref(false)
const selectedSelectAll = computed(() => selectedResults.value.length === results.value.length)

const onUpdateIsNotImplementedDialogShown = (val) => {
  isNotImplementedDialogShown.value = val
}

const toggleSelectAll = () => {
  if (selectedSelectAll.value) {
    selectedResults.value = []
  } else {
    selectedResults.value = results.value.map((r) => r.id)
  }
}
const toggleSortOrder = () => {
  if (selectedSortOrder.value === 'asc') selectedSortOrder.value = 'desc'
  else selectedSortOrder.value = 'asc'
  sortResults(selectedSortBy.value, selectedSortOrder.value)
}
const sortResults = (sortBy, sortOrder = 'asc') => {
  switch (sortBy) {
    case 'distanceFromIras':
    case 'rating':
    case 'minParticipants':
    case 'maxParticipants':
    case 'averageCost':
      results.value = filteredResults.sort((a, b) =>
        sortOrder === 'asc' ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy]
      )
      break
    case 'location':
    case 'activity':
    case 'category':
      results.value = filteredResults.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1
        if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1
        return 0
      })
      break
    default:
      break
  }
}
watch(selectedSortBy, (sortBy) => {
  selectedSortOrder.value = 'asc'
  sortResults(sortBy)
})
</script>

<template>
  <div class="h-full flex flex-col justify-between">
    <div class="flex flex-col h-full justify-center items-center" v-if="isLoading">
      <img src="@/assets/github-loading.gif" class="h-20 w-20" />
      <span class="pt-4 font-medium">Loading...</span>
    </div>
    <TransitionRoot
      appear
      :show="!isLoading"
      as="div"
      class="flex flex-col"
      enter="transition-opacity duration-700"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-50"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div class="flex flex-col gap-12 mt-4">
        <div class="flex flex-col gap-2">
          <h2 class="text-2xl font-semibold leading-7 text-gray-900">Results</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600">
            Your selected filters returned
            {{ results.length }} result{{ results.length === 0 || results.length > 1 ? 's' : '' }},
            with a default sorting of ascending distance from IRAS.
          </p>
        </div>
        <div class="flex flex-col">
          <div class="flex justify-between items-center">
            <div class="inline-flex">
              <label class="flex cursor-pointer items-center gap-2 pb-3">
                <input
                  type="checkbox"
                  v-model="selectedSelectAll"
                  class="checkbox"
                  @change="toggleSelectAll"
                />
                <span class="text-md text-neutral-400">Select All</span>
              </label>
            </div>
            <div class="pb-3 flex gap-2 items-center">
              <button type="button" class="px-1" @click="toggleSortOrder">
                <BarsArrowUpIcon
                  class="h-5 w-5 text-gray-400 hover:text-gray-700"
                  v-if="selectedSortOrder === 'asc'"
                />
                <BarsArrowDownIcon
                  class="h-5 w-5 text-gray-400 hover:text-gray-700"
                  v-if="selectedSortOrder === 'desc'"
                />
              </button>
              <Listbox
                class="relative"
                as="div"
                v-slot="{ open }"
                v-model="selectedSortBy"
                v-if="filteredResults.length > 1"
              >
                <ListboxButton
                  as="div"
                  class="flex cursor-pointer flex-row place-items-center gap-1 text-md text-neutral-400 hover:text-gray-700"
                >
                  <span>{{ getLabelForActivityAttribute(selectedSortBy) }}</span>
                  <ChevronDownIcon
                    class="h-3 w-3 transition-transform"
                    :class="{ 'rotate-180 transform': open }"
                  />
                </ListboxButton>
                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <ListboxOptions
                    class="absolute z-30 mt-1 flex min-w-content right-0 flex-col gap-1 rounded-md bg-white shadow-lg"
                  >
                    <ListboxOption
                      as="template"
                      v-for="sortBy of [
                        'location',
                        'activity',
                        'category',
                        'rating',
                        'minParticipants',
                        'maxParticipants',
                        'averageCost',
                        'distanceFromIras'
                      ]"
                      :key="sortBy"
                      :value="sortBy"
                      :disabled="
                        filteredResults.length === 0 ||
                        filteredResults.length === 1 ||
                        selectedSortBy === sortBy
                      "
                      v-slot="{ active, disabled, selected }"
                      ><li
                        :class="[
                          disabled
                            ? 'text-neutral-300'
                            : active
                            ? 'bg-gray-400 text-white'
                            : 'text-gray-900',
                          'relative cursor-pointer select-none px-3 py-2 text-left first:rounded-t-md last:rounded-b-md'
                        ]"
                      >
                        <span
                          :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']"
                          >{{ getLabelForActivityAttribute(sortBy) }}</span
                        >
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </Listbox>
            </div>
          </div>

          <Listbox multiple v-model="selectedResults">
            <ListboxOptions as="div" static>
              <div class="space-y-4">
                <div v-for="result in results" :key="result.id" class="flex flex-col">
                  <ListboxOption v-slot="{ active, selected }" :value="result.id" as="template">
                    <div
                      :class="[
                        active
                          ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                          : '',
                        selected ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white '
                      ]"
                      class="relative flex flex-col cursor-pointer rounded-t-lg px-5 py-4 shadow-md focus:outline-none"
                    >
                      <span
                        class="items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset"
                        :class="getColourClass(result.category)"
                      >
                        {{ getCategoryName(result.category) }}
                      </span>
                      <div class="flex w-full items-center justify-between">
                        <div class="text-sm flex flex-col w-full">
                          <div
                            :class="selected ? 'text-white' : 'text-gray-900'"
                            class="font-medium flex gap-2 mt-4"
                          >
                            <div class="flex gap-4 items-center">
                              <div class="flex flex-col">
                                <span>{{ result.location }}</span>
                                <span
                                  :class="selected ? 'text-white' : 'text-gray-400'"
                                  class="text-xs"
                                  >{{ result.activity }}</span
                                >
                                <span></span>
                              </div>
                            </div>
                          </div>

                          <div
                            :class="[
                              selected ? 'text-sky-100' : 'text-gray-500',
                              'flex flex-col gap-4 mt-2'
                            ]"
                          >
                            <div class="flex items-center">
                              <p
                                :class="selected ? 'text-white' : 'text-gray-700'"
                                class="text-xs self-center pt-[2px]"
                              >
                                {{ Number(result.rating).toFixed(1) }}
                                <span class="sr-only"> out of 5 stars</span>
                              </p>
                              <div class="ml-1 flex items-center">
                                <StarIcon
                                  v-for="rating in [0, 1, 2, 3, 4]"
                                  :key="rating"
                                  :class="[
                                    result.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  ]"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                            <div class="text-xs flex flex-col gap-2">
                              <div class="flex gap-3 items-center">
                                <CurrencyDollarIcon class="h-5 w-5 shrink-0" />
                                <span v-if="result.averageCost > 0"
                                  >S$ {{ result.averageCost }} per pax</span
                                >
                                <span v-else>Free</span>
                              </div>
                              <div class="flex gap-3 items-center">
                                <MapPinIcon class="h-5 w-5 shrink-0" />
                                <span>{{ result.address }}</span>
                              </div>
                              <div class="flex gap-3 items-center">
                                <UserGroupIcon class="h-5 w-5 shrink-0" />
                                <span>{{
                                  ((result.minParticipants === 0 || !!result.minParticipants) &&
                                    result.maxParticipants === 0) ||
                                  !!result.maxParticipants
                                    ? `${result.minParticipants} minimum - ${result.maxParticipants} maximum`
                                    : `Not available`
                                }}</span>
                              </div>
                            </div>
                            <div
                              class="flex flex-col text-xs font-light italic"
                              v-if="result.tags.length > 0"
                            >
                              <span>Tags: {{ result.tags }}</span>
                            </div>
                          </div>
                        </div>
                        <div v-show="selected" class="shrink-0 text-white">
                          <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                            <path
                              d="M7 13l3 3 7-7"
                              stroke="#fff"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </ListboxOption>
                  <span class="grid grid-cols-2 isolate rounded-b-lg shadow-md">
                    <button
                      type="button"
                      class="relative inline-flex justify-center items-center bg-white px-5 py-3 rounded-bl-lg text-xs font-medium text-gray-600 hover:bg-gray-50 focus:z-10 disabled:text-gray-200"
                      :disabled="!result.googleMapsUrl || result.googleMapsUrl === ''"
                      @click="() => openWindow(result.googleMapsUrl)"
                    >
                      Google Maps&nbsp;<ArrowTopRightOnSquareIcon class="h-3 w-3" />
                    </button>
                    <button
                      type="button"
                      class="relative -ml-px inline-flex justify-center items-center bg-white px-5 py-3 rounded-br-lg text-xs font-medium text-gray-600 hover:bg-gray-50 focus:z-10 disabled:text-gray-200"
                      :disabled="!result.reservationUrl || result.reservationUrl === ''"
                      @click="() => openWindow(result.reservationUrl)"
                    >
                      Reservation&nbsp;<ArrowTopRightOnSquareIcon class="h-3 w-3" />
                    </button>
                  </span>
                </div>
              </div>
            </ListboxOptions>
          </Listbox>
        </div>
      </div>
    </TransitionRoot>
    <div class="pt-12 grid grid-cols-2 justify-between gap-4 sticky bottom-0">
      <button
        class="btn btn-outline btn-primary bg-neutral-100"
        @click="() => $router.push({ name: QUESTIONS_PAGES.SUMMARY })"
      >
        Back
      </button>
      <button
        class="grow btn btn-primary disabled:bg-gray-100"
        :disabled="selectedResults.length === 0"
        @click="() => (isNotImplementedDialogShown = true)"
      >
        Share ({{ selectedResults.length }})
      </button>
    </div>
  </div>

  <NotImplementedDialog
    :is-dialog-shown="isNotImplementedDialogShown"
    @update:is-dialog-shown="onUpdateIsNotImplementedDialogShown"
  />
</template>
