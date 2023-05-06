<script setup>
import { PAGES } from '@/constants'

defineProps({
  label: String,
  value: [String, Array],
  isValueArray: Boolean,
  editPath: String
})
</script>

<template>
  <div class="pb-6 grid grid-cols-2 gap-1 px-0">
    <div>
      <dt class="text-sm font-medium leading-6 text-gray-900">
        <span>{{ label }}</span>
      </dt>
      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        <span v-if="(value && !isValueArray) || (isValueArray && value?.length === 1)">{{
          Array.isArray(value) ? value[0] : value
        }}</span>
        <template v-else-if="value?.length > 1">
          {{ value.join(', ') }}
        </template>
        <span v-else class="text-red-600">Not selected</span>
      </dd>
    </div>
    <button
      class="btn btn-outline btn-sm justify-self-end self-center"
      @click="$router.push({ name: editPath ?? PAGES.LANDING })"
    >
      Edit
    </button>
  </div>
</template>
