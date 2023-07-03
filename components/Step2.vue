<template lang="pug">
.contaner
    .up
      h1 select your plan
      p You have the option of monthly or yearly billing 
    .form 
      .items
        button.item(v-for="i in toggleSwitch.plans" :key="i.id" @click="toggleSwitch.selectItem(i)" :class="{ active: toggleSwitch.selectedItemId === i.id }")
          .image
            img(:src="i.image")
          .cont
            h3(style="color: hsl(213, 96%, 18%)") {{i.name}}
            p(v-if="toggleSwitch.yearly") ${{i.yearly}}/yr 
            p(v-else) ${{ i.monthly }}/mo
            p(v-if="toggleSwitch.yearly" style="color: hsl(213, 96%, 18%)") 2 months free
        
      .center 
        .toggle 
              h4(style="color:hsl(231, 11%, 63%)") Monthly
              label.toggle-switch( :class="{ active: toggleSwitch.yearly }" )
                input( type="checkbox" :checked="toggleSwitch.yearly" @change="toggleSwitch.toggle" )
                span.slider
              h4(style="color:hsl(213, 96%, 18%)") yearly
      .bottom
        button.btn2(@click="counter.decrement") 
            h5 Go back
        button.btn(@click="counter.increment" :disabled="toggleSwitch.selectedItemId === null") next step
        
        
    
</template>

<script setup lang="ts">

import {useSub} from '@/stores/sub'
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
const toggleSwitch = useSub()



</script>

<style lang="scss" scoped>

h1 {
  color: hsl(213, 96%, 18%);
}
p {
  color: hsl(231, 11%, 63%);
}
.contaner {
  .form {
    margin-top: 1em;
    .items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1em;
      .item {
        background: #ffffff;
        
        &.active{
          border: hsl(213, 44%, 44%) solid 1px;
          background: hsla(207, 90%, 88%, 0.664);
        }
        position: relative;
        padding: 1em;
        width: 9.5em;
        height: 11em;
        .image {
          position: absolute;
          top: 7px;
          left: 10px;
        }
        .cont {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          float: left;
          bottom: 7px;
          left: 10px;
        }
        border: hsl(231, 15%, 82%) 0.1px solid;
        border-radius: 10px;
      }
    }
    .center{
      .toggle {
        background: hsl(0, 0%, 90%);
        padding: 1em;
        margin: 2em auto;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 40px;
          height: 20px;
          border-radius: 10px;
          
        
          input[type='checkbox'] {
            display: none;
          }
        
         
          .slider {
            position: absolute;
            top: 2px;
            left: 2px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: #fff;
            transition: transform 0.2s;
          }
          background: hsl(213, 96%, 18%);
          &.active {
            
            .slider {
              transform: translateX(20px);
              
            }
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
}
@media (max-width:768px) {
  .contaner{
    .up{
      margin-top: 2em;
    }
    .form{

      .items{
        grid-template-columns: 1fr;
        .item{
          height: 6em;
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1em;
          .image{
            margin-bottom: 1.5em;
            position: relative;
          }
          .cont{
            position: relative;
            
          }
        }
      }
    }
  }
}
</style>
