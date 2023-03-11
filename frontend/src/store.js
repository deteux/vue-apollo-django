import { defineStore } from 'pinia'

export const usePhotoStore = defineStore('photos', {
    state: () => ({ 
        photoData: {
        }
    }),
    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
      },
    },
})