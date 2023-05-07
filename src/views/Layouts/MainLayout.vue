<script setup>
import AnimatedCat from '@/components/AnimatedCat.vue'
import { PAGES } from '@/constants'
import { useAppStore } from '@/stores'
import { TransitionRoot } from '@headlessui/vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = useAppStore()
const router = useRouter()
store.isLanding = useRoute().name === PAGES.LANDING

const isLanding = computed(() => store.isLanding)

router.afterEach((to, from) => {
  store.isLanding = to.name === PAGES.LANDING
  store.previousPath = from.name
})
</script>

<template>
  <main class="mobile-first grid bg-gray-800">
    <div class="h-full flex flex-col absolute justify-self-start">
      <div
        class="flex transition-[height] duration-200"
        :class="[isLanding ? 'h-[42%]' : 'h-[10%] mt-10', 'relative opacity-10']"
      >
        <img src="@/assets/svg/home-left.svg" class="self-end w-40" />
      </div>
      <div class="grow basis-0"></div>
    </div>
    <TransitionRoot
      :show="!isLanding"
      as="div"
      class="h-full flex flex-col absolute justify-self-center mr-10"
      enter="transition duration-300"
      enter-from="opacity-0 translate-y-full"
      enter-to="opacity-100 translate-y-0"
      leave="transition duration-50"
      leave-from="opacity-100 translate-y-0"
      leave-to="opacity-0 -translate-y-full"
    >
      <div class="flex h-[10%] mt-10">
        <img src="@/assets/svg/cat.svg" class="self-end w-72" />
      </div>
      <div class="grow basis-0"></div>
    </TransitionRoot>
    <div class="h-full flex flex-col absolute justify-self-end">
      <div
        class="flex transition-[height] duration-200"
        :class="[isLanding ? 'h-[42%]' : 'h-[10%] mt-10', 'relative opacity-10']"
      >
        <img src="@/assets/svg/home-left.svg" class="self-end w-52 -scale-x-100" />
      </div>
      <div class="grow basis-0"></div>
    </div>
    <div class="flex flex-col z-20">
      <div
        :class="[isLanding ? 'h-[40%]' : 'h-[10%]', 'relative transition-[height] duration-300']"
      >
        <TransitionRoot
          :show="isLanding"
          as="div"
          class="h-full flex"
          enter="transition duration-700"
          enter-from="opacity-0 -translate-y-full"
          enter-to="opacity-100 translate-y-0"
          leave="transition duration-50"
          leave-from="opacity-100 translate-y-0"
          leave-to="opacity-0 -translate-y-full"
        >
          <AnimatedCat />
        </TransitionRoot>
        <!-- <TransitionRoot
          :show="!isLanding"
          as="div"
          enter="transition duration-700"
          enter-from="opacity-0 translate-y-full"
          enter-to="opacity-100 translate-y-0"
          leave="transition duration-50"
          leave-from="opacity-100 translate-y-0"
          leave-to="opacity-0 -translate-y-full"
        >
          <div class="flex items-center pt-4 z-0">
            <img src="@/assets/svg/cat.svg" class="w-72 ml-32" v-if="!isLanding" />
          </div>
        </TransitionRoot> -->
      </div>
      <div
        :class="[
          isLanding ? '' : 'z-20',
          'grow basis-0 bg-neutral-100 rounded-t-lg overflow-y-auto p-4'
        ]"
      >
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<style>
.mobile-first {
  max-inline-size: 640px;
  margin-inline: auto;
  min-block-size: 100vh;
  min-block-size: 100dvh;
}
</style>
