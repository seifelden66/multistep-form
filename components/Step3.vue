<template lang="pug">
.contaner
    .up 
        h1(style="color: hsl(213, 96%, 18%)") pick add-ones
        p(style="color:hsl(231, 11%, 63%)") Add-ones help enhance your gaming experience
    .middle 
        button.item(v-for="i in data.extra" :key="i.id" @click="data.toggleSelectItem(i)" :class="{ active:data. isSelected(i) }")
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
import {useAddones} from '@/stores/addones'
const data = useAddones()
const counter = useCounterStore()
const toggleSwitch = useSub()


</script>

<style scoped lang="scss">
.contaner{
    .up{
        margin-top: 1em;
    }
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
                    text-align: left;
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