// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 1 }
  },

  actions: {
    increment() {
      this.count < 5 ? this.count = this.count + 1 : this.count
    },
    decrement() {
        this.count > 1 ? this.count = this.count - 1 : this.count
      },
  },
})
