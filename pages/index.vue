<template lang="pug">
.container
  .div1(v-if="counter.count === 1")
    Step1/

  div(v-if="counter.count === 2")
    h1 hello from 2
    button(@click="counter.increment()") next
    button(@click="counter.decrement") back
  div(v-if="counter.count === 3")
    h1  from 3
    button(@click="counter.increment()") next
    button(@click="counter.decrement") back
  div(v-if="counter.count === 4")
    h1 hello from 4
    
    button(@click="counter.decrement") back

 
 
  
</template>

<script setup lang="ts">

import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()

</script>

<style scoped lang="scss">
.container{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100vw;
}
@media (max-width:768px) {
    .container{
      display: flex;
      
    }
}
</style>