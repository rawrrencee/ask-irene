<script setup>
import AnimatedCat from '@/components/AnimatedCat.vue';
import { TransitionRoot } from '@headlessui/vue';
import { ref } from 'vue';

const showExpandedView = ref(false)
</script>

<template>
  <main class="relative isolate h-full bg-gray-800">
    <div class="h-full flex flex-col items-center justify-center">
      <div :class="[showExpandedView ? 'h-20' : 'h-80', 'transition-[height] duration-300']">
        <TransitionRoot
          :show="!showExpandedView"
          enter="transition duration-300"
          enter-from="opacity-0 -translate-y-full"
          enter-to="opacity-100 translate-y-0"
          leave="transition duration-300"
          leave-from="opacity-100 translate-y-0"
          leave-to="opacity-0 -translate-y-full"
        >
          <div class="mt-52">
            <AnimatedCat />
          </div>
        </TransitionRoot>
      </div>
      <div class="grow h-full w-full bg-white rounded-lg shadow-lg p-6 overflow-y-auto">
        <div class="h-content text-center">
          <TransitionRoot
            :show="!showExpandedView"
            as="div"
            class="mt-20 flex flex-col gap-6"
            enter="transition-opacity duration-300 delay-500"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Ask Irene</h1>
            <p class="text-lg leading-8 text-gray-600">Irene is one of the cats around IRAS.</p>
            <p class="text-lg leading-8 text-gray-600">
              She's still learning, but she might be able to help you with your team's activity
              planning.
            </p>
            <div class="mt-8 flex items-center justify-center gap-x-6">
              <button class="btn btn-primary" @click="showExpandedView = true">Get started</button>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
                >Login <span aria-hidden="true">→</span></a
              >
            </div>
          </TransitionRoot>
          <TransitionRoot
            :show="showExpandedView"
            as="div"
            enter="transition-opacity duration-300 delay-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
          >
            <div class="flex justify-between">
              <button class="btn btn-accent" @click="showExpandedView = false">Back</button>
            </div>
          </TransitionRoot>
        </div>
      </div>
    </div>
  </main>
</template>
