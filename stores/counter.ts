// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 1 }
  },

  actions: {
    increment() {
      this.count < 4 ? this.count = this.count + 1 : this.count
    },
    decrement() {
        this.count > 1 ? this.count = this.count - 1 : this.count
      },
  },
})
// export const useSub = defineStore('counter', {
//   state: () => {
//     return { val: 'monthly' }
//   },

//   actions: {
//     yearly() {
//       this.val != 'yearly'
//     },
//     monthly() {
//       this.val != 'monthly'
//     }
    
//   },
// })