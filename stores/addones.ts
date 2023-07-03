import { defineStore } from 'pinia'

export const useAddones = defineStore('addones', {
    state: () => {
        return {
            extra: [
                {
                    id: 1,
                    name: 'online service',
                    content: 'Access to multiplayer games',
                    month: 1,
                    yearly: 10,
                    selected: false
                },
                {
                    id: 2,
                    name: 'larger storage',
                    content: 'Extra 1TB of cloud save',
                    month: 2,
                    yearly: 20,
                    selected: false
                },
                {
                    id: 3,
                    name: 'customizable profile ',
                    content: 'custom theme of your profile',
                    month: 2,
                    yearly: 20,
                    selected: false
                }
            ],
            selectedItemIds : [],
            totalMonthlyValue: 0,
            totalYearlyValue: 0
        }
    },

    actions: {
        toggleSelectItem(item): void {
          item.selected = !item.selected;
          if (item.selected) {
            this.selectedItemIds.push(item.id);
          } else {
            this.selectedItemIds = this.selectedItemIds.filter((id) => id !== item.id);
          }
        },
      },
      getters: {
        isSelected: (state) => (item): boolean => {
          return state.selectedItemIds.includes(item.id);
        },
        totalMonthlyValue: (state) => {
            return state.extra
              .filter((item) => state.selectedItemIds.includes(item.id))
              // .reduce((total, item) => total + item.month, 0);
          },
          TtotalMonthlyValue: (state) => {
            return state.extra
              .filter((item) => state.selectedItemIds.includes(item.id))
              .reduce((total, item) => total + item.month, 0);
          },
      
      
          totalYearlyValue: (state) => {
            return state.extra
              .filter((item) => state.selectedItemIds.includes(item.id))
              // .reduce((total, item) => total + item.yearly, 0);
          },
          TtotalYearlyValue: (state) => {
            return state.extra
              .filter((item) => state.selectedItemIds.includes(item.id))
              .reduce((total, item) => total + item.yearly, 0);
          },
      
      },
})