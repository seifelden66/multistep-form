import { defineStore } from 'pinia'
export const useSub = defineStore('sub', {
    state: () => {
      return { yearly: true }
    },
  
    actions: {
      toggle() {
        this.yearly = !this.yearly
      },      
    },
  })