import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { STORE_KEY_ANSWERS } from '../constants'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLanding: undefined,
    previousPath: undefined,
    answers: useStorage(STORE_KEY_ANSWERS, {
      budget: undefined,
      categories: undefined,
      distance: undefined,
      minParticipants: undefined,
      maxParticipants: undefined
    })
  }),
  getters: {},
  actions: {}
})
