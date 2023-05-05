import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLanding: undefined,
    previousPath: undefined,
    answers: { budget: undefined, category: undefined, location: undefined, size: undefined }
  }),
  getters: {},
  actions: {}
})
