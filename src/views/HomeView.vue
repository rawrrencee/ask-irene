<script setup>
import AnimatedCat from '@/components/AnimatedCat.vue'
import { PAGES } from '@/constants'
import { TransitionRoot } from '@headlessui/vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  currentPath: String
})

const router = useRouter()
router.afterEach((to, from) => {
  if (to.path === PAGES.LANDING) {
    showBgCat.value = false
  }

  appPage.value = to.path
  previousPage.value = from.path

  setTimeout(() => {
    showBgCat.value = to.path !== PAGES.LANDING
  }, 300)
})

const previousPage = ref(null)
const appPage = ref(props.currentPath)
const isLanding = computed(() => appPage.value === PAGES.LANDING)
const showBgCat = ref(appPage.value !== PAGES.LANDING)

const onUpdateAppPage = (val) => {
  appPage.value = val
  if (val === previousPage.value) router.back()
  else router.push(val)
}

const routeToQuestionsPage = () => {
  appPage.value = null
  router.push(PAGES.QUESTIONS)
}
</script>

<template>
  <main class="relative isolate h-full bg-gray-800">
    <div class="h-full flex flex-col items-center justify-center">
      <div :class="[!isLanding ? 'h-20' : 'h-80', 'transition-[height] duration-300']">
        <TransitionRoot
          :show="isLanding"
          enter="transition duration-700"
          enter-from="opacity-0 -translate-y-full"
          enter-to="opacity-100 translate-y-0"
          leave="transition duration-50"
          leave-from="opacity-100 translate-y-0"
          leave-to="opacity-0 -translate-y-full"
        >
          <div class="mt-52">
            <AnimatedCat />
          </div>
        </TransitionRoot>
        <div class="flex items-center pt-4 z-0">
          <img src="@/assets/svg/cat.svg" class="w-72" v-if="showBgCat" />
        </div>
      </div>
      <div class="grow h-full w-full bg-white rounded-lg shadow-lg p-6 overflow-y-auto">
        <div class="text-center z-20 h-full">
          <router-view :currentPath="$route.path" @update:app-page="onUpdateAppPage"></router-view>
          <TransitionRoot
            appear
            :show="isLanding"
            as="div"
            class="mt-20 flex flex-col gap-6"
            enter="transition-opacity duration-700"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-150"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
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
                >(We asked for the cat's name, but didn't get a response, so we called her
                Irene)</span
              >
            </div>
            <div class="flex items-center justify-center gap-x-6 mb-6">
              <button class="btn btn-primary" @click="() => routeToQuestionsPage()">
                Get started
              </button>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
                >Login <span aria-hidden="true">→</span></a
              >
            </div>
          </TransitionRoot>
        </div>
      </div>
    </div>
  </main>
</template>
