<template lang="pug">
.container
  .div1(v-if="counter.count === 1")
    Step1/

  div(v-if="counter.count === 2")
    Step2/
  div(v-if="counter.count === 3")
    Step3/
    
  div(v-if="counter.count === 4")
    Step4/
    
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
 
}

</style>