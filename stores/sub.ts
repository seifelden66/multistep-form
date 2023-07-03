import { defineStore } from 'pinia'
export const useSub = defineStore('sub', {
  state: () => {
    return {
      plans: [
        {
          id: 1,
          name: 'arcade',
          image: 'iconarcade.svg',
          yearly: 90,
          monthly: 9
        },
        {
          id: 2,
          name: 'advanced',
          image: 'iconadvanced.svg',
          yearly: 120,
          monthly: 12
        },
        {
          id: 3,
          name: 'pro',
          image: 'iconpro.svg',
          yearly: 150,
          monthly: 15
        },
      ],
      yearly: true,
      planTotalMonthlyValue: 0,
      planTotalYearlyValue: 0,
      selectedItemId :null
    }
  },

  actions: {
    toggle() {
      this.yearly = !this.yearly
    },
    
    selectItem(item) {
      this.selectedItemId = item.id;
    }
  },
  getters: {
    selectedYearlyValue(state) {
      const selectedItem = state.plans.find(item => item.id === state.selectedItemId);
      return selectedItem ? selectedItem.yearly : null;
    },
    selectedYearlyName(state) {
      const selectedItem = state.plans.find(item => item.id === state.selectedItemId);
      return selectedItem ? selectedItem.name : null;
    },
    selectedMonthlyValue(state) {
      const selectedItem = state.plans.find(item => item.id === state.selectedItemId);
      return selectedItem ? selectedItem.monthly : null;
    },
    selectedMonthlyName(state) {
      const selectedItem = state.plans.find(item => item.id === state.selectedItemId);
      return selectedItem ? selectedItem.name : null;
    }
  }

})