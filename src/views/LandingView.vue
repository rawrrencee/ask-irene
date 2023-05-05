<script setup>
import { PAGES } from '@/constants'
import { useAppStore } from '@/stores'
import { TransitionRoot } from '@headlessui/vue'
import { useRouter } from 'vue-router'

const store = useAppStore()
const router = useRouter()

const routeToQuestionsPage = () => {
  store.isLanding = false

  setTimeout(() => {
    router.push({ name: PAGES.QUESTIONS })
  }, 300)
}
</script>

<template>
  <TransitionRoot
    appear
    :show="store.isLanding"
    as="div"
    class="h-full flex flex-col"
    enter="transition-opacity duration-700"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-50"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div class="my-auto flex flex-col text-center gap-6">
      <div class="flex justify-center">
        <div
          class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
        >
          <span class="font-semibold"><span class="text-indigo-400">MVP</span> Edition</span>
        </div>
      </div>
      <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Ask Irene</h1>
      <div class="flex flex-col gap-3">
        <span class="text-lg leading-7 text-gray-600"
          >Activity Planning suggestions provided by one of the 🐱 cats from IRAS' ground
          floor.</span
        >
        <span class="text-xs italic leading-4 text-gray-400"
          >(We asked for the cat's name, but didn't get a response, so we called her Irene)</span
        >
      </div>
      <div class="flex items-center justify-center gap-x-6">
        <button class="btn btn-primary" @click="() => routeToQuestionsPage()">Get started</button>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
          >Login <span aria-hidden="true">→</span></a
        >
      </div>
    </div>
  </TransitionRoot>
</template>
