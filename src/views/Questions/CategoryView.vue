<script setup>
import { ACTIVITIES } from '@/constants'
import { useAppStore } from '@/stores'
import { Listbox, ListboxOption, ListboxOptions, TransitionRoot } from '@headlessui/vue'

import { ref, watch } from 'vue'

const store = useAppStore()

const categoriesMap = new Map()
ACTIVITIES.forEach((a) => {
  categoriesMap.set(a.category)
})
const categories = Array.from(categoriesMap.keys())
categories
  .sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
  .forEach((c) => {
    const activitiesInCategory = ACTIVITIES.filter((a) => a.category === c)
    const tagsMap = new Map()
    const tagsFromActivities = activitiesInCategory.map((a) => a.tags)
    tagsFromActivities.forEach((t) => {
      const tags = t.split(', ')
      tags.forEach((t) => !!t && t !== '' && tagsMap.set(t))
    })
    categoriesMap.set(c, { tags: Array.from(tagsMap.keys()), count: activitiesInCategory.length })
  })
const selectedCategories = ref(store.answers.categories ?? [])
store.answers.categories = selectedCategories.value

watch(selectedCategories, () => {
  store.answers.categories = selectedCategories.value
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
        <h2 class="text-2xl font-semibold leading-7 text-gray-900">Category</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          Please select the categories you'd like to see activity recommendations for.
        </p>
      </div>
      <Listbox multiple v-model="selectedCategories">
        <ListboxOptions as="div" static>
          <div class="space-y-4">
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="category in categories"
              :key="category"
              :value="category"
              as="template"
            >
              <div
                :class="[
                  active
                    ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                    : '',
                  selected ? 'bg-sky-900 bg-opacity-75 text-white ' : 'bg-white '
                ]"
                class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
              >
                <div class="flex w-full items-center justify-between">
                  <div class="flex items-center">
                    <div class="text-sm">
                      <p
                        as="p"
                        :class="selected ? 'text-white' : 'text-gray-900'"
                        class="font-medium"
                      >
                        {{ category }}&nbsp;({{ categoriesMap.get(category).count }})
                      </p>
                      <div
                        :class="[
                          selected ? 'text-sky-100' : 'text-gray-500',
                          'flex flex-wrap gap-2 mt-2'
                        ]"
                      >
                        <template v-for="tag in categoriesMap.get(category).tags" :key="tag">
                          <span
                            class="items-center rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600"
                            >{{ tag }}</span
                          >
                        </template>
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
          </div>
        </ListboxOptions>
      </Listbox>
    </div>
  </TransitionRoot>
</template>
