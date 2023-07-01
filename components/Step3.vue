<template lang="pug">
.contaner
    .up 
        h1(style="color: hsl(213, 96%, 18%)") pick add-ones
        p(style="color:hsl(231, 11%, 63%)") Add-ones help enhance your gaming experience
    .middle 
        button.item(v-for="i in data" :key="i.id" @click="toggleSelectItem(i)" :class="{ active: isSelected(i) }")
            .cont
                .left
                    h5(style="color: hsl(213, 96%, 18%)") {{ i.name }}
                    p(style="color: hsl(231, 11%, 63%)") {{ i.content }}
                .right(v-if="toggleSwitch.yearly")
                    h6(style="color: hsl(213, 96%, 18%)") +${{ i.yearly }}/yr
                .right(v-else)
                    h6(style="color: hsl(213, 96%, 18%)") +${{ i.month }}/mo
    .bottom 
        button.btn2(@click="counter.decrement") 
            h5 Go back
        button.btn(@click="counter.increment") next step
                
</template>

<script setup lang="ts">
import {useSub} from '@/stores/sub'
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
const toggleSwitch = useSub()
const data =[
    {
        id: 1,
        name:'online service',
        content: 'Access to multiplayer games',
        month: 1,
        yearly: 10,
        selected: false
    },
    {
        id: 2,
        name:'larger storage',
        content: 'Extra 1TB of cloud save',
        month: 2,
        yearly: 20,
        selected: false
    },
    {
        id: 3,
        name:'customizable profile ',
        content: 'custom theme of your profile',
        month: 2,
        yearly: 20,
        selected: false
    }
]
const selectedItemIds = ref([]);
const toggleSelectItem = (item) => {
  item.selected = !item.selected;
  if (item.selected) {
    selectedItemIds.value.push(item.id);
  } else {
    selectedItemIds.value = selectedItemIds.value.filter((id) => id !== item.id);
  }
};
const isSelected = (item) => selectedItemIds.value.includes(item.id);

</script>

<style scoped lang="scss">
.contaner{
    .middle{
        display: grid;
        margin: 1em auto;
        gap: 1em;
        .item{
            &.active{
                border: hsl(213, 44%, 44%) solid 1px;
                background: hsla(207, 90%, 88%, 0.664);
              }
            padding: 0.7em;
            border-radius: 10px;
            border: hsla(207, 90%, 88%, 0.664) 1px solid;
            background: #fff;
            .cont{
                display: flex;
                gap: 1em;
                align-items: center;
                justify-content: space-between;
                .left{
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    float: left;
                }
            }
        }
    }
    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1em;
        .btn {
          background: #457b9d;
          color: white;
          border: none;
          border-radius: 5px;
          padding: 10px;
          cursor: pointer;
        }
        .btn2 {
          background: #9d454500;
          color: hsl(231, 11%, 63%);
          border: none;
          border-radius: 5px;
          padding: 10px;
          cursor: pointer;
        }
        
      }
    
}
</style>